const { Schema, model } = require('mongoose');
const Group = require('./Group');

const favoritesSchema = new Schema(
  {
    favoritesBody: {
      type: String,
      required: true,
      maxlength: 25,
    },
    groups: [Group.schema]
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }


);

favoritesSchema
  .virtual('favorited')
  // Getter
  .get(function () {
    return this.groups.length;
  });

  const Favorites = model('Favorites', favoritesSchema)

module.exports = Favorites;
