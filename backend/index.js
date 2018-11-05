const Dragon = require("./dragon.js");
const Generation = require("./generation");
const GenerationEngine = require('./engine.js')

const engine = new GenerationEngine()
console.log("hello world");

engine.start();
setTimeout(() => { engine.stop(); }, 20000);
// console.log('generation', generation);
// const doc = generation.newDragon();
// console.log("doc", doc)

// const chester = new Dragon({
//     birthdate: new Date(),
//     nickname: "Cheese"
// });
// const bill = new Dragon({
//     nickname: "Bill",
//     birthdate: new Date(),
//     traits: [{ traitType: 'backgroundColor', traitValue: 'green' }]
// });
// const mimar = new Dragon();

// setTimeout(() => {
//     const gooby = generation.newDragon();
//     console.log("gooby", gooby);
// }, 15000);


// // console.log(bill)
// console.log("CheeseBurger", chester);
// console.log("Bill", bill);
// console.log("CheeseBurger", chester);
// console.log("Mimar", mimar);
