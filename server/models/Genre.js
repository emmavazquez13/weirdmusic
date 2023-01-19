const { Schema, model } = require('mongoose');

const genreSchema = new Schema(
    {
        group: [groupSchema]
    },
)

const Genre = model('Genre', genreSchema);

module.exports = Genre;