const { gql } = require('apollo-server-express');

module.exports = gql`
 type State {
     id: ID!
     name: String!
     abbreviation: String!
 }

 extend type Query {
     allStates: [State!]!
 }
`;