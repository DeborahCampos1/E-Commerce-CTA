// DEPENDENCIES
const express = require("express");
const app = express();
const productsController = require("./controllers/productController.js");
const cors = require("cors");

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Precious Metals Store!");
});
app.use("/products", productsController);

app.get("*", (req,res)=>{
  req.status(404).json({error: "Page Not Found"})
});

module.exports = app;
