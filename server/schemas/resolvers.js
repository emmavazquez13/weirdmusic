const { AuthenticationError } = require('apollo-server-express');
const { User, Genre, Group, Favorites } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        return userData;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    groups: async () => {
      return Group.find();
    },
    favorites: async (parent, { group }) => {
      const params = group ? { group } : {};
      return Favorites.find(params);
    },
    genre: async (parent, { group }) => {
      const params = group ? { group } : {};
      return Genre.find(params);
    }
  },
  


  Mutation: {
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('No user with this username found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    addFavorites: async (parent, { groupId }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: {groups: groupId  } },
          { new: true }
        ).populate('favorites');
        
        return updatedUser;
      }
    },
    // Add a third argument to the resolver to access data in our `context`
    postGroup: async (parent, args) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
       const group = await Group.create({args});
        return group;
     
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },

    deleteGroup: async (parent, { groupId }) => {
    const updatedGroup = Group.findOneAndUpdate(
          { _id: context.group._id },
          { $pull: { addGroup: { groupId } } },
          { new: true }
        );
        return updatedGroup;
    },
  },
};



module.exports = resolvers;
