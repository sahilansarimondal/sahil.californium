const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const url = require("url")
const requestIp = require("request-ip")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const timestamps = Date.now()
const dateObj = new Date(timestamps)
const date = dateObj.getDate()
const month = dateObj.getMonth()
const year = dateObj.getFullYear()



const Gmiddleware =  function (req, res, next) {
    const newDate = (`${date}-${month}-${year}`)
    const userIP = requestIp.getClientIp(req)
    const path = url.parse(req.url).pathname
    console.log(newDate,userIP,path)
    next()
}
app.use(Gmiddleware)

mongoose.connect("mongodb+srv://sahilansarimondal:sahil1234@sahildb.jqkiszf.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
