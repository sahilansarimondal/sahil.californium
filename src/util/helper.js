

    const date = new Date()
const printDate = function (){
    console.log(date.toDateString());
}

const printMonth = function (){
    console.log(date.getMonth() + 1)
}

function getBatchInfo(){
    const name = {
        name : "californium",
        week: "W3",
        day: "D4",
        topic:"the topic for today is Nodejs module system"
    }

    console.log((Object.values(name)).toString());
}

module.exports.myDate = printDate
module.exports.myMonth = printMonth
module.exports.getBatchInfo = getBatchInfo


//- getBatchInfo() : prints batch name, week#, Day#, the topic being taught today is ….. For example - Californium, W3D4, the topic for today is Nodejs module system’