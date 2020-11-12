const { gql } = require('apollo-server-express');

module.exports = gql`
 type City {
     id: ID!
     name: String!
     state_code: String!
 }

 extend type Query {
     allCities(stateCode: String): [City!]!
 }
`;