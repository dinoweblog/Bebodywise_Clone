const express = require("express");

const crudController = require("./crud.controller");
const Product = require("../models/product.model");
const User = require("../models/user.model");
const CartData = require("../models/cart.model");
const Blog = require("../models/blog.model");
const Review = require("../models/review.model");

const router = express.Router();

// const starTotal = 5;
// function ratingsFun(rating) {
//   // 2
//   const starPercentage = (rating / starTotal) * 100;
//   console.log(starPercentage);
//   // 3
//   const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
//   // 4
//   document.querySelector(".stars-inner").style.width = starPercentageRounded;
// }

router.get("/home", async (req, res) => {
  const products = await Product.find().lean().exec();
  const blog = await Blog.find().lean().exec();
  const review = await Review.find().lean().exec();
  return res.render("index", {
    products: products,
    review: review,
    blog: blog,
  });
});

router.post("/home", async (req, res) => {
  const cart = await CartData.create(req.body);

  return res.send(cart);
});

router.get("/all_products", async (req, res) => {
  const products = await Product.find().lean().exec();
  return res.render("all_products", {
    products: products,
  });
});

router.get("/productDetails/:id", async (req, res) => {
  const products = await Product.findById(req.params.id).lean().exec();
  return res.render("productDetails", {
    products: products,
  });
});
router.get("/payment", (req, res) => {
  return res.render("payment");
});
router.get("/checkout", (req, res) => {
  return res.render("checkout");
});

router.get("/users", async (req, res) => {
  const user = await User.find().lean().exec();
  console.log(user);
  return res.render("index");
});

router.get("/orderPlaced", async (req, res) => {
  try {
    const purchase = await Product.find().limit(1).lean().exec();
    return res.render("orderPlaced", { items: purchase });
  } catch (err) {
    return res.err.message;
  }
});

// router.get("/:id", authenticate, async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ user_id: req.user._id })
//       .populate("products")
//       .lean()
//       .exec();
//     return res.send(cart);
//   } catch (error) {
//     res.send({ error: error });
//   }
// });

module.exports = router;
