const express = require('express');
const router = express.Router();
const newUser = require("../controllers/userController")
const ispaiduser = require("../middlewares/isfreeuser")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.post("/createUser",ispaiduser.isFree, newUser.createUser)
router.post("/createProduct", newUser.createProduct)
router.post("/createOrder",ispaiduser.isFree, newUser.createOrder)

module.exports = router;