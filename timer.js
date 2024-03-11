const ns = require("node-schedule");

const taskOne = ns.scheduleJob("*/5 * 14 * * 1", function () {
  console.log(
    "Hello World" +
      " -> " +
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds()
  );
});

setTimeout(function () {
  taskOne.cancel();
  console.log("Goodbye World!!");
}, 20000);

const rule = new ns.RecurrenceRule();
rule.dayOfWeek = [new ns.Range(1, 5)];
rule.hour = 14;
rule.second = 0;

const taskTwo = ns.scheduleJob(rule, function () {
  console.log("Vasco", new Date().getSeconds());
});
