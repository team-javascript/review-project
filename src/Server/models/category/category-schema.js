const mongoose = require("mongoose");

const reviewSchema = require("../Reviews/review-schema");

module.exports = new mongoose.Schema({
  category: { type: String, required: true },
  reviews: [reviewSchema]
});
