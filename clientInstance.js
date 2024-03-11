const countA = require("./uniqueInstance");
const countA2 = require("./uniqueInstance");
const countB = require("./newInstance")();
const countB2 = require("./newInstance")();

countA.increment();
countA.increment();
console.log(countA.value);
console.log(countA2.value);

countB2.increment();
countB2.increment();
console.log(countB.value);
console.log(countB2.value);
