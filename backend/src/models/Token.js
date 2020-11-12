const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = mongoose.Schema({
    _userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: 86400
    }
});

tokenSchema.statics.findAll = async () => {
    const tokens = await Token.find({});

    if (!tokens) {
        throw new Error({error: 'tokens not found'});
    }

    return tokens;
}

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;