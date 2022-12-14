const mongoose = require('mongoose');

const Schema = mongoose.Schema

const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type:[Number],
        index: "2dsphere"
    }
});

const exitSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    altitudeMSL: {
        type: Number
    },
    hikeDuration: {
        type: Number
    },
    exit: GeoSchema,
    landing: GeoSchema,
    parking: GeoSchema,
}, {timestamps: true})

module.exports = mongoose.model('Exit', exitSchema)