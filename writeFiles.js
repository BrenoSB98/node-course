const fs = require("fs");

const products = {
  Freezer: {
    name: "Freezer",
    price: 10000,
    quantity: 10,
  },
  Bike: {
    name: "Bike",
    price: 2000,
    quantity: 100,
  },
  "Vasco Jersey Away": {
    name: "Vasco Jersey Away",
    price: 399.99,
  },
  "Vasco Jersey Home": {
    name: "Vasco Jersey Home",
    price: 399.99,
  },
};

fs.writeFile(__dirname + "/products.json", JSON.stringify(products), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("The file was saved!");
  }
});
