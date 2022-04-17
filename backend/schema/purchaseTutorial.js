const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    user_id: {
        required: true,
        type: String
    },
    tutorial_id: {
        required: false,
        type: String,
    },
    tutorial_json: {
        required: false,
        type: String,
    },
    user_json: {
        required: false,
        type: String,
    },
    amount: {
        required: false,
        type: String,
    },
    addedBy: {
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

module.exports = mongoose.model('purchaseTutorial', dataSchema)