const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const threadSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
    created: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    channel: {
        type: Schema.Types.ObjectId,
        ref: 'Channel'
    },
    status: {
        type: String,
        required: true,
        default: 'opened'
    },
    isLocked: {
        type: Boolean,
        required: true,
        default: false
    },
    lastRepliedAt: {
        type: Date,
        required: true
    }
},{
    timestamps: {}
});

threadSchema.pre('save', async function (next) {
    console.log('[Thread save hook]');
    // Hash the password before saving the user model
    const thread = this
    
    if (thread.isModified('title')) {
        thread.slug = thread.title.split(' ').join('-').toLowerCase();
    }
    next()
});

// threadSchema.pre('updateOne', async function() {
//     // const data = this.getUpdate();
//     console.log('[Thread update hook]');

//     // // data.password = 'Teste Middleware';
//     // // this.update({}, data).exec();
//     // next();

//     await this.set({ updatedAt: new Date() });
//     next();
// });

threadSchema.methods.getUser = async function() {
    // Generate an auth token for the user
    console.log('[getUser]');
    const thread = this
    const newThread = await Thread.findOne({ _id: thread._id }).populate('created').exec();

    return newThread.created;
}

threadSchema.methods.getChannel = async function() {
    // Generate an auth token for the user
    console.log('[getChannel]');
    const thread = this
    const newThread = await Thread.findOne({ _id: thread._id }).populate('channel').exec();

    return newThread.channel;
}

threadSchema.statics.findById = async (threadId) => {
    const thread = await Thread.findOne({ _id: threadId });

    return thread;
}

threadSchema.statics.findAll = async () => {
    const threads = await Thread.find({});

    if (!threads) {
        throw new Error({error: 'threads not found'});
    }

    return threads;
}

const Thread = mongoose.model('Thread', threadSchema);

module.exports = Thread;