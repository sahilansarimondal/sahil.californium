const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const mongoose = require("mongoose")
const { get } = require("../routes/route")
const ObjectId = mongoose.Schema.Types.ObjectId


const createBook= async function (req, res) {

    let data = req.body
    if((data.author_id.length > 0)&& (data.publisher.length > 0)){
        const auther_id = await authorModel.findById(data.author_id)
        const publisher_id = await publisherModel.findById(data.publisher)
        if(publisher_id&&auther_id){
                let book = await bookModel.create(data)
                res.send({createdBook : book})
            } else{
                res.send({ObjectIdError:"ObjectId is incorrect"})
            }
        }else{
        res.send({errorMessage: "Auther Id and Publisher Id cant be empty"})
    }

    // let book = req.body
    // if(book.author_id){
    //     if(book.publisher){
    //         let bookCreated = await bookModel.create(book)
    //         res.send({data: bookCreated})
    //     }else{
    //         res.send("Publisher Id is required")
    //     }
    // }else{
    //     res.send("Author Id is required")
    // }
}

// const totalSalesAutor = async function(req, res) {
//     let allAuthorSale = await bookModel.aggregate(
//         [
//             {$group: { _id : "name", totalNumberOfSales : {$sum : "price"}}},
//             {$sort: { totalNumberOfSales: -1}}
//         ]
//     )
// }

// const updateData = async function (req, res) {
//     const getId = await publisherModel.find({publisher_name:{$in :["Penguin, HarperCollins"]}})
//     const publisherIDs = getId.map(publisher => publisher._id)
//     const updatebook = await bookModel.updateMany({getId :{$in : publisherIDs}}, {$set:{ isHardcover: true}})
//     const updatePrice = await bookModel.updateMany({rating:{$gt: 3.5}}, {price:{$inc:10}})
// }
const createPublisher= async function (req, res) {
    let book = req.body
    let PublisherCreated = await publisherModel.create(book)
    res.send({data: PublisherCreated})
}

const getPublisherData= async function (req, res) {
    let publisher = await publisherModel.find()
    res.send({data: publisher})
}
const getBooksData= async function (req, res) {

        let books = await bookModel.find().populate("author_id publisher")
        res.send({data: books})
}

const bookUpdate = async function (req, res) {
    const publisher = await publisherModel.find({name:{$in:[ 'Penguin', 'HarperCollins']}})
    const publisherIds = publisher.map(x=>x._id)
    const updatedData = await bookModel.updateMany({publisher:{$in: publisherIds}}, {$set:{isHardCover:true}})
    const updatedBookPrice = await bookModel.updateMany({ rating: { $gt: 3.5 } }, { $inc: { price: 10 } });
    res.send({update:updatedData,updatedPrice:updatedBookPrice})
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getPublisherData= getPublisherData
module.exports.createPublisher= createPublisher
module.exports.bookUpdate= bookUpdate
