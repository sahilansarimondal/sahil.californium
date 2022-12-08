const welcomeFn = function (name){
    console.log(`Welcome to my application. I am ${name} and a part of FunctionUp Californium cohort`)
}
//welcomeFn("sahil")
module.exports.welcomeFn = welcomeFn
const oddNum = function (){
    const newArr = []
    for(let i =0; i <= 20 ; i++){
    if(i % 2!== 0 ){
        newArr.push(i)
    }
}
console.log(newArr)
}
oddNum()

