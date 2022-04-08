const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    category: {
        required: true,
        type: String
    },
    categoryName: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: String
    },
    ducation: {
        required: true,
        type: String
    },
    image: {
        required: false,
        type: String
    },
    status: {
        required: true,
        type: Number,
        default:1
    },
    created_at: {
        required: true,
        type: String,
        default:Date.now()
    }
})

module.exports = mongoose.model('courses', dataSchema)