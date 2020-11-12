const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    state_code: {
        type: String,
        unique: true
    }
});

citySchema.statics.findByState = async (stateCode) => {
    const cities = await City.find({state_code: stateCode});

    if (!cities) {
        throw new Error({error: 'cities not found'});
    }

    return cities;
}

citySchema.statics.findAll = async () => {
    const cities = await City.find({});

    if (!cities) {
        throw new Error({error: 'cities not found'});
    }

    return cities;
}

const City = mongoose.model('City', citySchema);

module.exports = City;