//const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let authordata= req.body
    let savedData= await AuthorModel.create(authordata)
    res.send({msg: savedData})
}

const findBook = async function (req, res ) {
    let hereChetan = await AuthorModel.find({author_name : "Chetan Bhagat"}).select({author_id : 1, _id : 0})
    let bookName = await BookModel.find(...hereChetan)
    res.send({msg: bookName})

}

const updatePrice = async function(req,res){
    let updatedBook = await BookModel.findOneAndUpdate({name:"Two States",$set:{price:100},new:true})
    let UpPrice = await BookModel.find(updatedBook).select({price: 1, _id : 0})
    let id = await BookModel.find(updatedBook).select({author_id:1,_id:0})
    let auth = await AuthorModel.find(...id).select({author_name:1,_id:0})
    res.send({auth, UpPrice})
}

const bookCost = async function (req, res) {
    let booklist = await BookModel.find({price : {$gte : 50},price:{ $lte : 100}}).select({ author_id :1})
    let authorIds = await booklist.map(book => book.author_id)
    let myaut = await AuthorModel.find({author_id:{$in: authorIds}}).select({author_name : 1, _id : 0})
     res.send({msg: myaut})
}


// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



module.exports.createBook= createBook
module.exports.createAuthor = createAuthor
module.exports.findBook = findBook
module.exports.bookCost = bookCost
module.exports.updatePrice = updatePrice
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
