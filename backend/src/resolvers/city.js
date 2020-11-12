const { ApolloError, AuthenticationError, ForbiddenError } = require("apollo-server-express");

module.exports = {
    Query: {
        async allCities(parent, { stateCode }, { models }) {
            console.log('[get cities]');

            if(!stateCode)
                return models.City.findAll();
            else
                return models.City.findByState(stateCode);
        }
    }
}