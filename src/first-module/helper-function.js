

const greetPerson = function (person){
    console.log(`Hi ${person}, how are you?`);
    console.log(new Date());
}

const personEmail = "sahil@gmail.com"
module.exports.myFunction = greetPerson
module.exports.personEmail = personEmail
