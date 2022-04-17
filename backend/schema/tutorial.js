const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        required: false,
        type: String,
    },
    video_link: {
        required: false,
        type: String,
    },
    course: {
        required: false,
        type: String,
    },
    courseName: {
        required: false,
        type: String,
    },
    caetgory: {
        required: false,
        type: String,
    },
    caetgoryName: {
        required: false,
        type: String,
    },
    related_document: {
        required: false,
        type: String,
    },
    addedBy: {
        required: false,
        type: String
    },
    authorName: {
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

module.exports = mongoose.model('tutorials', dataSchema)