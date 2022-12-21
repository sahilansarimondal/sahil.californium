const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")


const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    if(bookCreated.author_id){
        if(bookCreated.publisher){
            res.send({data: bookCreated})
        }else{
            res.send("Publisher Id is required")
        }
    }else{
        res.send("Author Id is required")
    }
}
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
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
