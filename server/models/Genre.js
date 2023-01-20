const { Schema, model } = require('mongoose');

const groupSchema = require('./Group')
const genreSchema = new Schema(
    {
        //addGroup: [groupSchema]
    },
)

const Genre = model('Genre', genreSchema);

module.exports = Genre;