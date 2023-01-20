const { Schema, model } = require('mongoose');

const userSchema = require('./User')
const messageSchema = new Schema(
    {
        message: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
        },
       // user: [userSchema]
    },
)

const Message = model('Message', messageSchema);

module.exports = Message;