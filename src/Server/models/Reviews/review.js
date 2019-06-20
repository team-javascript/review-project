const categorySchema = require("../Schema/category-schema");
const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Review",
  new mongoose.Schema({
    title: String,
    content: String,
    category: [categorySchema],
    imageUrl: String
  })
);
