const mongoose = require('mongoose');

const recruiterSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});



const Recruiter = mongoose.model('User', recruiterSchema);
module.exports = Recruiter;