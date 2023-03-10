const { Schema, model } = require('mongoose');
const User = require('./User');
const messageSchema = require('./Message')
const groupSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
      //  messages: [messageSchema],
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false,
    }
)




const Group = model('Group', groupSchema);

module.exports = Group;