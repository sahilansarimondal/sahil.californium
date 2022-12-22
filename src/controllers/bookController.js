const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const mongoose = require("mongoose")
const { get } = require("../routes/route")
const ObjectId = mongoose.Schema.Types.ObjectId


const createBook= async function (req, res) {

 const data = req.body

 const author = await authorModel.findById(data.author_id)
 const PublisherData = await publisherModel.findById(data.publisher)
 if( data.publisher.length > 0 && data.author_id.length > 0){
     if(author == data.author_id && PublisherData == data.publisher){
         let bookCreated = await bookModel.create(data)
                   res.send({data: bookCreated})
     }else{
        res.send({data: "Author or Publisher id is not matching"})
     }
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

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getPublisherData= getPublisherData
module.exports.createPublisher= createPublisher
// module.exports.totalSalesAutor= totalSalesAutor
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
