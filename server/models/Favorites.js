const { Schema, model } = require('mongoose');

const favoritesSchema = new Schema(
    {
        group: [groupSchema.name]
    },
)

const Favorites = model('Favorites', favoritesSchema);

module.exports = Favorites;