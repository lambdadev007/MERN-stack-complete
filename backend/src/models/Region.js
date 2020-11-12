const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regionSchema = mongoose.Schema({
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

const Region = mongoose.model('Region', regionSchema);

module.exports = Region;