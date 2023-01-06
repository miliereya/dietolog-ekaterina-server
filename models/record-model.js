const mongoose = require('mongoose')

const Schema = mongoose.Schema

const RecordSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    email: {
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

module.exports = mongoose.model('records', RecordSchema)