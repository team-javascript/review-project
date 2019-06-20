const mongoose = require("mongoose");

const reviewSchema = require("../Reviews/review-schema");

module.exports = new mongoose.Schema({
  categoryTitle: { type: String, required: true },
  reviews: [reviewSchema]
});
