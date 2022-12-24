const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/newBook", UserController.createBookData)

router.get("/getBooks", UserController.allBookData)

// router.get("/basicCode", middle1.mid1,middle1.mid2, middle1.mid3, UserController.basicCode, middle1.mid4)



module.exports = router;