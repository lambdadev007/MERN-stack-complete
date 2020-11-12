const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wineSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    winery: {
        type: Schema.Types.ObjectId,
        ref: 'Winery'
    },
    price: {
        type: Schema.Types.Decimal128
    },
    compared_price: {
        type: Schema.Types.Decimal128
    },
    description: {
        type: String
    },
    flavorAroma: [{
        type: String,
        trim: true
    }],
    images: [{
        type: String
    }],
    tastingNote: [{
        type: String
    }]
},{
    timestamps: {}
});

wineSchema.statics.findAll = async () => {
    const wines = await Wine.find({});

    if (!wines) {
        throw new Error({error: 'wines not found'});
    }

    return wines;
}

const Wine = mongoose.model('Wine', wineSchema);

module.exports = Wine;