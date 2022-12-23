
const isFree = function (req, res, next) {
    // const isfree = req.headers
    // if(!isfree.isfreeappuser){
    //     res.send({msg: "header cant be empty"})
    // }
    if(req.headers.isfreeappuser){
        req.isFreeAppUser = req.headers.isfreeappuser
        next()
    }else{
        res.send({msg: "header cant be empty"})
    }
}

module.exports.isFree = isFree