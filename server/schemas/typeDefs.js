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
    genreId: ID
    group: Group
    newgroup: Int
  }

  type Group {
    _id: ID!
    name: String!
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
    groups: [Group]!
    group(groupdId: ID!): Group
    favorites(groupId: ID): [Favorites]
    genre(groupId: ID): [Genre]
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    postGroup(name: String!): Group 
    addFavorites(Id: ID!): Favorites
    deleteGroup(_id: ID!): Group
  }
`;

module.exports = typeDefs;