const Dragon = require("./dragon.js");
console.log("hello world");

const chester = new Dragon({
    birthdate: new Date(),
    nickname: "Cheese"
});
const bill = new Dragon({
    nickname: "Bill",
    birthdate: new Date(),
    traits: [{ traitType: 'backgroundColor', traitValue: 'green' }]
});
const mimar = new Dragon();

setTimeout(() => {
    const gooby = new Dragon();
    console.log("gooby", gooby);
}, 3000);


// console.log(bill)
console.log("CheeseBurger", chester);
console.log("Bill", bill);
console.log("CheeseBurger", chester);
console.log("Mimar", mimar);
