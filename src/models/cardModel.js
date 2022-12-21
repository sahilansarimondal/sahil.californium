const mongoose = require('mongoose');

const bookAuthors = new mongoose.Schema( {
    cardNumber : String,
    cardType : String,
    customerName : String,
    status : String,
    vision : String,
    customerID : String
})


module.exports = mongoose.model ("Author", bookAuthors)