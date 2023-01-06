const mongoose = require('mongoose')

const Schema = mongoose.Schema

const СonsultationSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    services: {
        type: [{
            text: {
                type: String,
                require: true
            }
        }],
        require: true,
        default: []
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('services', СonsultationSchema)