const mongoose = require("mongoose");

const reviewSchema = require("../Reviews/review-schema");

module.exports = new mongoose.Schema({
  tag: { type: String, required: true },
  reviews: [reviewSchema]
});
