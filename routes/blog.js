const express = require("express");
const router = express.Router();
const Post = require("../models/post");

// get all posts from database
router.get("/", async (req, res) => {
  try {
    let results = await Post.find();
    res.json(results);
  } catch (err) {
    console.log(err);
    res.json({
      massage: "Something went wrong",
      status: 403,
    });
  }
});

// get one post by id from database
router.get("/:id", async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    console.log(err);
    res.json({
      massage: "Post not found",
      status: 404,
    });
  }
});

// add new post into database
router.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    let newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      postedTime: new Date(),
    });

    let result = await newPost.save();
    res.json(result);
    // console.log(result);
  } catch (err) {
    console.log(err);
    res.json({
      massage: "Something went wrong",
      status: 404,
    });
  }
});

// update post in database
router.put("/:id", async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    post.title = req.body.title;
    post.content = req.body.content;
    await post.save();
    res.json(post);
  } catch (err) {
    console.log(err);
    res.json({
      massage: "Something went wrong",
      status: 403,
    });
  }
});

// delete post from database
router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id, function (err) {
      if (err) console.error(err);
      res.json({
        massage: "Great success",
        status: 200,
      });
    });
  } catch (err) {
    console.log(err);
    res.json({
      massage: "Something went wrong",
      status: 403,
    });
  }
});

// add comment into post
router.post("/:id", async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    post.comments = [req.body.comment, ...post.comments];
    await post.save();
    res.json(post);
  } catch (err) {
    console.log(err);
    res.json({
      massage: "Something went wrong",
      status: 403,
    });
  }
});

module.exports = router;
