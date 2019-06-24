const mongoose = require("mongoose");

const reviewSchema = require("../Reviews/review-schema");

module.exports = new mongoose.Schema({
  name: String,
  reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}]
});
