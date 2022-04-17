const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    course_id: {
        required: true,
        type: String
    },
    courseName: {
        required: true,
        type: String
    },
    user_id: {
        required: true,
        type: String,
    },
    qty: {
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

module.exports = mongoose.model('cart', dataSchema)