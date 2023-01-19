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
    group: [Group]
  }

  type Favorites {
    favoritesId: ID!
    group: [Group]
  }

  type Group {
    groupId: ID!
    name: String!
    totalMessages: Int!
    lastModified: Date
    going: Boolean
    messages: [Message]
    user: [User]
  }

  type Message {
    messageId: ID!
    message: String!
    createdAt: Date
    user: [User]
  }
  
  input inputGroup {
    groupId: ID!
    name: String!
    totalMessages: Int!
    lastModified: Date
    going: Boolean
    messages: [Message]
    user: [User]
  }

  type Query {
    me: User
    group: [Group]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addGroup(groupId: ID!) Group
    addFavorites(favoritesID: ID!) Group
    postGroup(name: String!, totalMessages: Int!, lastModified: Date, going: Boolean) Group
    savedGroups(groupData: inputGroup!) 
    deleteGroup(groupId: ID!)
    deleteMessage(messageId: ID!)
  }
`;

module.exports = typeDefs;
