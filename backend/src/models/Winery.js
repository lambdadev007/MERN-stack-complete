const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const winerySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    bio: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'City'
    },
    state: {
        type: Schema.Types.ObjectId,
        ref: 'State'
    },
    website: {
        type: String
    },
    lat: {
        type: String
    },
    long: {
        type: String
    },
    amenities: [{
        type: String
    }],
    images: [{
        type: String
    }],
    openHours: [{
        date: {
            type: String
        },
        start: {
            type: String
        },
        end: {
            type: String
        }
    }],
    startingAt: {
        type: Date
    },
    endingAt: {
        type: Date
    },
    contact: {
        type: Schema.Types.ObjectId,
        ref: 'Contact'
    }
},{
    timestamps: {}
});

winerySchema.statics.findAll = async () => {
    const wineries = await Winery.find({});

    if (!wineries) {
        throw new Error('wineries not found');
    }

    return wineries;
}

const Winery = mongoose.model('Winery', winerySchema);

module.exports = Winery;