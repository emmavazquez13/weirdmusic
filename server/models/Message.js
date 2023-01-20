const { Schema, model } = require('mongoose');

const messageSchema = new Schema(
    {
        message: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            required: true,
        },
        user: [userSchema]
    },
)

const Message = model('Message', messageSchema);

module.exports = Message;