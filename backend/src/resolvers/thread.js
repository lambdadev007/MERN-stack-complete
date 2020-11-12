const { ApolloError, ForbiddenError } = require("apollo-server-express");

module.exports = {
    Query: {
        async thread (parent, { threadId }, { models }) {
            console.log('[get single thread]');

            const thread = models.Thread.findById(threadId);

            if(!thread) {
                throw new ApolloError('thread not found');
            }

            return thread;
        },
        async allThreads (parent, args, { models }) {
            return models.Thread.findAll();
        }
    },
    Mutation: {
        async createThread (parent, args, { models, authUser }) {
            console.log('[create thread]');

            if(!authUser) {
                throw new ForbiddenError('Not authroized');
            }

            return models.Thread.create({
                ...args,
                channel: args.channelId,
                created: authUser.user._id,
                lastRepliedAt: new Date()
            });
        },
        async updateThread (parent, { id, title, content, channelId }, { models, authUser }) {
            console.log('[updateThread]');
            let thread = await models.Thread.findById(id);
            if(!authUser) {
                throw new ForbiddenError('Not authroized');
            }

            if (authUser.user._id.toString() !== thread.created.toString()) {
                throw new ForbiddenError('You can only edit your own thread');
            }

            const updated = await models.Thread.updateOne({ _id: id }, { $set: { title: title, content: content, slug: title.split(' ').join('-').toLowerCase(), channel: channelId } }, {timestamps: true});

            if(updated.n && updated.nModified) return true;
            else return false;
        }
    },
    Thread: {
        async created (thread) {
            console.log('[created population]');
            return await thread.getUser();
        },
        async channel (thread) {
            console.log('[channel population]');
            return await thread.getChannel();
        }
    }
};