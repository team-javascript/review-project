const mongoose = require("mongoose");


module.exports = new mongoose.Schema({
  title: String,
  content: String,
  categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
  imageUrl: String,
  tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}],
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'comments'}]
});

//Why is a new Schema being made both here and in the review.js?
