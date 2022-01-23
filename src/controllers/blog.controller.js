const express = require("express");

const Blog = require("../models/blog.model");

const router = express.Router();

router.get("/", async (req, res) => {
  const blog = await Blog.find().lean().exec();

  return res.send(blog);
});

router.post("/", async (req, res) => {
  const blog = await Blog.create(req.body);

  return res.send(blog);
});

module.exports = router;
