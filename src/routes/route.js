const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const lodPack = require("lodash")
const helperNew = require("../util/helper")
const loggerNew = require("../logger/logger")
const lower = require("../validator/formatter")

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)

    const months = _.chunk(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],4)
    console.log(months);

    const newTail = _.tail([1,3,5,7,9,11,13,15,17,19])
    console.log(newTail);
    
    helperNew.myDate()
    helperNew.myMonth()
    helperNew.getBatchInfo()
    loggerNew.welcomeFn("Sahil")

    lower.upperCase()
    lower.lowerCase()



    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;