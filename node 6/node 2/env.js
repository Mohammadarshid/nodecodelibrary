// console.log(process.env.Name);
// console.log(process.env.PROFESSION);
require("dotenv").config();
console.log(`My name is ${process.env.NAME}`);
console.log(`I am a ${process.env.PROFESSION}`);
console.log(`I am a ${process.env.COURSE}`);
