const { type } = require("express/lib/response")
const userModel= require("../models/userModel")
const productModel = require("../models/productModel")
const orderModel = require("../models/orderModel")
// const orderModel = require("../models/orderModel")

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

const createOrder = async function (req, res ) {
    let data = req.body
    data.isFreeAppUser = Boolean(req.headers.isfreeappuser)
    let validateUser = await userModel.findById(data.userId)
    let validateProduct = await productModel.findById(data.productId)
    if(validateUser){
        if(validateProduct){
            if(req.headers.isfreeappuser=="true"){
                let noAmmout = await orderModel.findOneAndUpdate({_id:data.userId},{$set:{amount:0}})
                res.send({order:noAmmout})
            }
            else{
                if(validateProduct.price<validateUser.balance){
                    let order = await orderModel.create(data).populate('userId').populate('productId')
                    let remainingBalance = validateUser.balance - validateProduct.price
                    let updateUserBalance = await userModel.findOneAndUpdate({_id:data.userId},{$set:{balance:remainingBalance}},{new:true})
                    res.send({orderData:order,updatedBalance:updateUserBalance})
                }else{
                    res.send({insuffisientBalance:"user doesn't have enough balance"})
                }
            }
        }else{
            res.send({WrongIdMsg:"ProductId is incorrect please give correct productId"})
        }
    }else{
        res.send({WrongIdMsg:"UserId is incorrect please give correct UserId"})
    }
    
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
module.exports.createOrder= createOrder