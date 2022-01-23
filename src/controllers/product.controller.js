const express = require("express");

const crudController = require("./crud.controller");
const Product = require("../models/product.model");

const router = express.Router();

router.get("/", async (req, res) => {
  const product = await Product.find().lean().exec();

  return res.send(product);
});

router.post("/", async (req, res) => {
  const product = await Product.create(req.body);

  return res.send(product);
});
// router.get("/all-products", (req, res) => {
//   return res.render("all_products");
// });
// router.get("/single", (req, res) => {
//   return res.render("single_product_page");
// });
// router.get("/checkout", (req, res) => {
//   return res.render("checkout");
// });
module.exports = router;
