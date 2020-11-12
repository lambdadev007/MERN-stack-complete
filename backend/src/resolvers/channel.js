const { ApolloError } = require("apollo-server-express");

module.exports = {
    Query: {
        allChannels(parent, args, { models }) {
            return models.Channel.findAll();
        }
    },
    Mutation: {
        async createChannel(parent, { name }, { models }) {
            console.log('[channel create]');

            try {
                const channel = new models.Channel({ name: name, slug: name });
                await channel.save();
                
                return channel;
            } catch (error) {
                throw new ApolloError(error);
            }
        }
    }
}