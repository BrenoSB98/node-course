const port = 3003;

const express = require("express");
const app = express();
const db = require("./databases");
const bp = require("body-parser");

app.use(bp.urlencoded({ extended: true }));

app.get("/products", (req, res, next) => {
  res.send(db.getAllProducts());
});

app.get("/products/:id", (req, res, next) => {
  res.send(db.getProduct(req.params.id));
});

app.post("/products", (req, res, next) => {
  const product = db.saveProduct({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
  });
  res.send(product);
});

app.delete("/products/:id", (req, res, next) => {
  const product = db.deleteProduct(req.params.id);
  res.send(product);
});

app.put("/products/:id", (req, res, next) => {
  const product = db.saveProduct({
    id: req.params.id,
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
  });
  res.send(product);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
