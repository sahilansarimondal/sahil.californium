const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

// userId: “61951bfa4d9fe0d34da86829”,
// 	productId: “61951bfa4d9fe0d34da86344”
// 	amount: 0,
// 	isFreeAppUser: true, 
// 	date: “22/11/2021”

const orderSchema = new mongoose.Schema( {
    userId:{type: ObjectId, ref: "user21" },
	productId: {type: ObjectId, ref: "product"},
	amount: Number,
	isFreeAppUser:{type:Boolean, default: true}, 
	date: Date,
}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema) //users
