const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String,
    },
    status: {
        required: true,
        type: Number,
        default:1
    },
    created_at: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('categories', dataSchema)