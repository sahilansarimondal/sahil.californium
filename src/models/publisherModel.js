const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
    
    publisher_name: String,
    address:String,

}, { timestamps: true });

module.exports = mongoose.model('newPublisher', publisherSchema)
