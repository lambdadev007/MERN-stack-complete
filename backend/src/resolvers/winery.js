const { ApolloError, AuthenticationError, ForbiddenError } = require("apollo-server-express");

module.exports = {
    Query: {
        async wineries(parent, args, { models, authUser }) {
            console.log('[wineries]');
            if(!authUser)
                throw new ForbiddenError('Not authorized');

            return models.Winery.find({}).populate(['city', 'state', 'contact']);
        }
    },
    Mutation: {
        async addWinery(parent, args, { models, authUser }) {
            console.log('[add winery]');

            try {
                if(!authUser)
                    throw new ForbiddenError('Not authorized');

                const contact = await models.Contact.create({
                    name: args.contactName,
                    email: args.contactEmail,
                    phone: args.contactPhone,
                    website: args.contactWebsite
                });

                console.log('[args.openHours]', args.openHours);
                
                const winery = await models.Winery.create({
                    name: args.name,
                    bio: args.bio,
                    phone: args.phone,
                    address: args.address,
                    city: args.city,
                    state: args.state,
                    website: args.website,
                    lat: args.lat,
                    long: args.long,
                    contact: contact._id,
                    openHours: args.openHours
                });

                return winery;
            }
            catch(error) {
                throw new ApolloError(error);
            }
        }
    }
}