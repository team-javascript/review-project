const categorySchema = require("../Schema/category-schema");
const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  title: String,
  content: String,
  categories: [categorySchema],
  imageUrl: String
});

//Why is a new Schema being made both here and in the review.js?
