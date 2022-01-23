const express = require("express");

const Review = require("../models/blog.model");

const router = express.Router();

router.get("/", async (req, res) => {
  const review = await Review.find().lean().exec();

  return res.send(review);
});

router.post("/", async (req, res) => {
  const review = await Review.create(req.body);

  return res.send(review);
});

module.exports = router;
