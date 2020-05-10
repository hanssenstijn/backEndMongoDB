const mongoose = require('mongoose');

// Describe what the data looks like
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// see this in mlab (define name and Schema)
module.exports = mongoose.model('Posts', PostSchema);