const { Schema, model } = require('mongoose');

const genreSchema = new Schema(
    {
        artist: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        going: {
            type: Boolean,
            required: true,
        },
        group: [groupSchema]
    },
)

const Genre = model('Genre', genreSchema);

module.exports = Genre;