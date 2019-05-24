const express = require("express");
const app = express();
const port = 4001;
app.use(express.json());
require("dotenv").config();
const massive = require("massive");

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("connected to db");
});

app.get("/api/inventory", (req, res) => {
  const db = req.app.get("db");
  db.get_inventory()
    .then(products => {
      res.status(200).send(products);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/api/inventory", (req, res) => {
  const { name, price, img } = req.body;
  const db = req.app.get("db");
  db.add_to_inventory([name, price, img])
    .then(products => {
      res.status(200).send(products);
    })
    .catch(err => console.log(err));
});

app.put("/api/inventory/:id", (req, res, next) => {
  const db = req.app.get("db");
  const { id } = req.params;
  const { name, price, img } = req.query;
  db.update_product([id, name, price, img])
    .then(products => {
      res.status(200).send(products);
    })
    .catch(err => console.log(err));
});

app.delete("/api/inventory/:id", (req, res, next) => {
  const db = req.app.get("db");
  const { id } = req.params;
  db.delete_product([id])
    .then(products => {
      res.status(200).send(products);
    })
    .catch(err => console.log(err));
});

app.listen(port, () => console.log(`server is on ${port}`));
