const { gql } = require('apollo-server-express');

module.exports = gql`
 type Channel {
     id: ID!
     name: String!
     slug: String!
     created_at: DateTime!
     updated_at: DateTime!
 }

 extend type Query {
     allChannels: [Channel!]!
 }

 extend type Mutation {
    createChannel(name: String!): Channel!
 }
`;