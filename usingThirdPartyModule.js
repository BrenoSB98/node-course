// Using Third Party Modules
const _ = require("lodash");
// Normally, we use the character _ in the name of the variable to reference third-party module.

setInterval(() => console.log(_.random(1, 100)), 2000);

// In this example, we use the lodash library to generate random numbers and execute the code in the terminal using the nodemon command.
// nodemon usingThirdPartyModule.js
