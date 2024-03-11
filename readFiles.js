const fs = require("fs");

const path = __dirname + "/info.json";
// Synchronous strategy. We must be careful with this strategy by can crash. Event Loop
const synchronousStrategy = fs.readFileSync(path, "utf-8");
console.log(synchronousStrategy);

// Asynchronous strategy.
fs.readFile(path, "utf-8", (err, data) => {
  if (err) throw err;
  const config = JSON.parse(data);
  console.log(`${config.db.host}: ${config.db.port}`);
});

const config = require("./info.json");
console.log(`${config.db.host}: ${config.db.port}`);
console.log(config.db);

fs.readdir(__dirname, (err, files) => {
  if (err) throw err;
  console.log("files of dir: ");
  console.log(files);
});
