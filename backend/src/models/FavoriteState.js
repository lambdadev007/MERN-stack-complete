const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteStateSchema = mongoose.Schema({
    _userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    state: {
        type: Schema.Types.ObjectId,
        ref: 'State'
    }
});

favoriteStateSchema.statics.findAll = async () => {
    const states = await FavoriteState.find({});

    if (!states) {
        throw new Error({error: 'states not found'});
    }

    return states;
}

const FavoriteState = mongoose.model('FavoriteState', favoriteStateSchema);

module.exports = FavoriteState;