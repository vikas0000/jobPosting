const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jobPosting');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connection to mongodb'));
db.once('open', function(){
    console.log('connected to database::mongodb');
});

module.exports = db;