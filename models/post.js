// first name, last name, email, username, password, deleted, role
let mongoose = require("mongoose");

let postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  comments: {
    type: Array,
    required: false,
  },
  postedTime: {
    type: Date,
    required: true,
  },
});

let Post = mongoose.model("post", postSchema);

module.exports = Post;
