const mongoose = require("mongoose");
const categorySchema = require("../category/category-schema");
const tagSchema = require("../tag/tag-schema");

module.exports = new mongoose.Schema({
  title: String,
  content: String,
  categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
  imageUrl: String,
  tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}]
});

//Why is a new Schema being made both here and in the review.js?
