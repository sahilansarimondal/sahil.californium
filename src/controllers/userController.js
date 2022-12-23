const { type } = require("express/lib/response")
const userModel= require("../models/userModel")
const productModel = require("../models/productModel")

const createUser = async function (req, res) {
        const data = req.body
        if(req.headers.isfreeappuser == "true"){
             data.isFreeAppUser = true
             const createdata = await userModel.create(data)
             res.send({msg: createdata})
        }else{
            const createdata = await userModel.create(data)
            res.send({msg: createdata})
        }
    }

const createProduct = async function (req, res) {
    const data = req.body
    const createdata = await productModel.create(data)
    res.send({msg: createdata})
}

const basicCode= async function(req, res) {
    
    let contentTypeHeader = req.headers.content-type
    console.log("The headers received in this request are: ", req.headers)
    console.log("The content type header is: ", contentTypeHeader)


    req.headers.month = "December"
    req.batch = "Californium"

    console.log("The headers modified from this request are: ", req.headers)
    // let tokenDataInHeaders= req.headers.token
    // console.log(tokenDataInHeaders)
    res.header("year", "2022")
    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")

    console.log("The request object looks like this: ", req)
    res.send({ msg: "This is coming from controller (handler)"})
    
    }

module.exports.basicCode= basicCode
module.exports.createUser= createUser
module.exports.createProduct= createProduct