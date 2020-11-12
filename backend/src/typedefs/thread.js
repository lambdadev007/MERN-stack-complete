const { gql } = require('apollo-server-express');

module.exports = gql`
    type Thread {
        id: ID!
        title: String!
        slug: String!
        content: String!
        created: User!
        channel: Channel!
        status: ThreadStatus!
        isLocked: Boolean!
        lastRepliedAt: DateTime!
        createdAt: DateTime!
        updatedAt: DateTime!
    }

    enum ThreadStatus {
        UNSOLVED
        SOLVED
    }

    extend type Query {
        thread(threadId: String!): Thread
        allThreads: [Thread!]!
    }

    extend type Mutation {
        createThread(title: String!, content: String!, channelId: ID!): Thread!
        updateThread(id: ID!, title: String!, content: String!, channelId: ID!): Boolean!
    }
`;