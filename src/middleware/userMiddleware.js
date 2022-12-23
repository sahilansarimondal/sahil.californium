

const mid1 = function (req, res , next) {
    console.log("HELLO MIDDLEWARE 1")
    next()
}
const mid2 = function (req, res , next) {
    console.log("HELLO MIDDLEWARE 2")
    next()
}
const mid3 = function (req, res , next) {
    console.log("HELLO MIDDLEWARE 3")
    next()
}
const mid4 = function (req, res , next) {
    console.log("HELLO MIDDLEWARE 4")
    next()
}

module.exports.mid1 = mid1
module.exports.mid2 = mid2
module.exports.mid3 = mid3
module.exports.mid4 = mid4