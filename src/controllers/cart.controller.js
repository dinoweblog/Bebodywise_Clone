// const express = require("express");

// const Cart = require("../models/cart.model");

// const router = express.Router();

// router.get("", async (req, res) => {
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

// // module.exports = router;
