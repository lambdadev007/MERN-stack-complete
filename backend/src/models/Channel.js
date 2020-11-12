const mongoose = require('mongoose');

const channelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

channelSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const channel = this
    console.log('[channel pre 1]');
    if (channel.isModified('name')) {
        console.log('[channel pre 2]');
        channel.slug = channel.name.split(' ').join('-').toLowerCase();
    }
    next()
});

channelSchema.statics.findAll = async () => {
    const channels = Channel.find({});

    if (!channels) {
        throw new Error({error: 'channels not found'});
    }

    return channels;
}

const Channel = mongoose.model('Channel', channelSchema);

module.exports = Channel;