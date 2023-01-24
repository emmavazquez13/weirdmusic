const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    favorited: Int
    favorites: [Favorites]

  }

  type Auth {
    token: ID!
    user: User
  }
 
  type Genre {
    genreId: ID!
    group: Group
    newgroup: Int
  }

  type Group {
    groupId: ID!
    name: String!
    totalMessages: Int!
    lastModified: String
  }

  type Message {
    messageId: ID!
    message: String!
    createdAt: String
    user: User
  }
  
  type Favorites {
    favoritesId: ID!
    favoritesBody: String
    groups: Group
    favorited: Int

  }
  
  type Query {
    me: User
    groups: Group
    favorites(groupId: ID): [Favorites]
    genre(groupId: ID): [Genre]
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    postGroup(groupId: ID! name: String! totalMessages: Int! lastModified: String): Genre
    addFavorites(groupId: ID!): Favorites
    deleteGroup(groupId: ID!): Genre
  }
`;

module.exports = typeDefs;
