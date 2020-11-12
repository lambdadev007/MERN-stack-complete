const { gql } = require('apollo-server-express');

module.exports = gql`
 type Contact {
    id: ID!
    name: String!
    email: String!
    phone: String
    website: String
 }
`;