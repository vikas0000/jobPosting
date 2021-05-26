const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true
    },
    skillSet: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User'

    }
},{
    timestamps: true
});

const RecruiterPost = mongoose.model('RecruiterPost', postSchema);
module.exports = RecruiterPost;