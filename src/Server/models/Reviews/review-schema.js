const mongoose = require("mongoose");
const categorySchema = require("../category/category-schema");
const tagSchema = require("../tag/tag-schema");

module.exports = new mongoose.Schema({
  title: String,
  content: String,
  categories: [categorySchema],
  imageUrl: String,
  tags: [tagSchema]
});

//Why is a new Schema being made both here and in the review.js?
