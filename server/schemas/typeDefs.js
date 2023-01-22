const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    favorites: [Favorites]

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
  
  type Favorites {
    favoriteId: ID!
    favoriteBody: String
    groups: Group

  }
  
  type Query {
    me: User
    groups: [Group]
    favorites(groupId: ID): [Favorites]
    genre(groupId: ID): [Genre]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    postGroup(groupId: ID! name: String! totalMessages: Int! lastModified: String going: Boolean): Genre
    addFavorites(groupId: ID!): Favorites
    deleteGroup(groupId: ID!): Genre
  }
`;

module.exports = typeDefs;
