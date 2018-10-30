const Dragon = require("./dragon.js");
console.log("hello world");

const cheeseburger = new Dragon({
    birthdate: new Date(),
    nickname: "Cheese"
});
const bill = new Dragon();
console.log(bill)
console.log("CheeseBurger", cheeseburger);
