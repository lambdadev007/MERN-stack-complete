const { gql } = require('apollo-server-express');

module.exports = gql`
 type User {
     id: ID!
     name: String!
     email: String!
     username: String
     bio: String
     city: City
     state: State
     role: Role!
     avatar: String
     createdAt: DateTime!
     updatedAt: DateTime!
 }

 enum Role {
     ADMIN
     USER
 }

 type Token {
     token: String!
 }

 type Pin {
     pin: String!
 }

 extend type Mutation {
    signUp(name: String!, email: String!, password: String!): String!
    signIn(email: String!, password: String!): Token!
    verifyEmail(pin: String!): Token!
    pinResend(email: String!): String!
    logOut: Boolean!
    logOutAll: Boolean!
    uploadAvatar(avatar: Upload!): User!
    updateUser(username: String, bio: String, city: String, state: String, favState: String, favRegion: String): User!
 }

 extend type Query {
     me: User!
 }
`;