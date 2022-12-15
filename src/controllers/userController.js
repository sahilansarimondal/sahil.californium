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