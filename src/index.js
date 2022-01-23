const express = require("express");
var methodOverride = require("method-override");
const bodyParser = require("body-parser");

const pageController = require("./controllers/page.controller");
const productController = require("./controllers/product.controller");
const blogController = require("./controllers/blog.controller");
const reviewController = require("./controllers/review.controller");
const cartController = require("./controllers/cart.controller");

const app = express();

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// NOTE: when using req.body, you must fully parse the request body
//       before you call methodOverride() in your middleware stack,
//       otherwise req.body will not be populated.

app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/bebodywise", pageController);
app.use("/products", productController);
app.use("/blogs", blogController);
app.use("/reviews", reviewController);

// app.locals.fun = (items) => {
//   const starPercentage = (items.rating / 5) * 100;
//   const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

//   console.log("kkkd");
//   return starPercentageRounded;
// };

module.exports = app;

/*
const { register, login } = require("./controllers/auth.controller");
const productController = require("./controllers/product.controller");

const app = express();

app.use(express.json());

app.post("/register", register);
app.post("/login", login);
*/
