const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Auth {
    token: ID!
    user: User
  }
 
  type Genre {
    genreId: ID!
    group: Group
  }

  type Group {
    groupId: ID!
    name: String!
    totalMessages: Int!
    lastModified: String
    going: Boolean
    messages: Message
    user: User
  }

  type Message {
    messageId: ID!
    message: String!
    createdAt: String
    user: User
  }
  
  input inputGroup {
    groupId: ID!
    name: String!
    totalMessages: Int!
    lastModified: String
    going: Boolean
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addGroup(groupData: inputGroup!): Genre
    addFavorites(groupData: inputGroup!): User
    deleteGroup(groupId: ID!): Genre
  }
`;

// postGroup(name: String!, totalMessages: Int!, lastModified: Date, going: Boolean) Group 
// unused mutation for now
// deleteMessage(messageId: ID!)
module.exports = typeDefs;
