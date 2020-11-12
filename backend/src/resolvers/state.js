const { ApolloError, AuthenticationError, ForbiddenError } = require("apollo-server-express");

module.exports = {
    Query: {
        async allStates(parent, args, { models }) {
            console.log('[get states]');
            
            return models.State.findAll();
        }
    }
}