const mongoose = require('mongoose');

const SpeechSchema = new mongoose.Schema({
    speechName: {
        type: String,
        required: [true, "Speech name is required!"],
        minlength: [2, "Speech name must be at least 2 characters long"]
    },
    speechContent: {
        type: String,
        required: [true, "Speech content is required!"],
        minlength: [2, "Speech content must be at least 2 characters long"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Speech', SpeechSchema);