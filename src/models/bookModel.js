const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

//bookName( mandatory field), price containing Indian and european price, year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false)

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        require: true,
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    year: {type :Number, default : 2021,},
    tags: [String],
    authorName: String, 
    totalPages: Number,
    stockAvailable: Boolean,
    //sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
