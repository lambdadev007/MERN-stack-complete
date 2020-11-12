const { gql } = require('apollo-server-express');

module.exports = gql`
 type Winery {
    id: ID!
    name: String!
    bio: String!
    phone: String
    address: String
    city: City
    state: State
    website: String!
    lat: String!
    long: String!
    contact: Contact
    amenities: [String!]!
    images: [String!]!
    openHours: [openHour]
    startingAt: DateTime!
    endingAt: DateTime!
    createdAt: DateTime!
    updatedAt: DateTime!
 }

 type openHour {
   date: String!,
   start: String!,
   end: String!
 }

 input openHourInput {
   date: String!,
   start: String!,
   end: String!
 }

 extend type Query {
    wineries: [Winery!]!
 }

 extend type Mutation {
    addWinery(
      name: String!,
      bio: String!,
      phone: String!
      address: String!
      city: String!
      state: String!
      website: String!
      lat: String!
      long: String!
      contactName: String,
      contactEmail: String,
      contactPhone: String,
      contactWebsite: String,
      openHours: [openHourInput!]
    ): Winery!
 }
`;