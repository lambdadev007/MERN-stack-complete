const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    abbreviation: {
        type: String,
        unique: true
    }
});

stateSchema.statics.findAll = async () => {
    const states = await State.find({});

    if (!states) {
        throw new Error({error: 'states not found'});
    }

    return states;
}

const State = mongoose.model('State', stateSchema);

module.exports = State;