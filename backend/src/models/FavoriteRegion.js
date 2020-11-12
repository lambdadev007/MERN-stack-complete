const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteRegionSchema = mongoose.Schema({
    _userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    region: {
        type: Schema.Types.ObjectId,
        ref: 'Region'
    }
});

favoriteRegionSchema.statics.findAll = async () => {
    const regions = await FavoriteRegion.find({});

    if (!states) {
        throw new Error({error: 'states not found'});
    }

    return regions;
}

const FavoriteRegion = mongoose.model('FavoriteRegion', favoriteRegionSchema);

module.exports = FavoriteRegion;