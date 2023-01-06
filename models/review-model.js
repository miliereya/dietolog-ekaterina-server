const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    isApplyed: {
        type: Boolean,
        require: true,
        default: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('reviews', ReviewSchema)