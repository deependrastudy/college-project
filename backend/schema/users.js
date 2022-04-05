const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    mobile: {
        required: true,
        type: String
    },
    address: {
        required: false,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: Number,
        default:1
    },
    created_at: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('users', dataSchema)