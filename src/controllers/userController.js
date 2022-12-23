const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const basicCode = async (req, res, next) => {
    let contentType = req.headers //[content-type]

    req.headers.month = "December"
    req.headers.year = "2022"


    res.header("year","2022")

    req.batch = "Californiam"
    console.log("the req obj looks like this ", req)
    console.log("the content all header",req.headers)
    console.log("the content type header", contentType)
    console.log("HEADER DATA ABOVE")
    console.log("hey man, congrats your have reached the hendler")
    res.send({msg: "this is comming from controller (handler)"})
    next()
}

const createBookData = async function (req, res){
    let book = req.body
    let savedBooks = await UserModel.create(book)
    res.send({msg : savedBooks})
}

const allBookData = async function (req, res){
    let allBooks = await UserModel.find()
    res.send({msg : allBooks})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData

module.exports.createBookData = createBookData
module.exports.allBookData = allBookData

module.exports.basicCode = basicCode