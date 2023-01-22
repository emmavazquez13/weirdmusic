const { Schema, model } = require('mongoose');

const Group = require('./Group')
const genreSchema = new Schema(
    {
        groups: [Group.schema]
    },
);

genreSchema
  .virtual('newgroup')
  // Getter
  .get(function () {
    return this.groups.length;
  });

const Genre = model('Genre', genreSchema);

module.exports = Genre;