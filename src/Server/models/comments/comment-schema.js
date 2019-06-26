const mongoose = require("mongoose");

const reviewSchema = require("../Reviews/review-schema");

module.exports = new mongoose.Schema({
  input: {type: String},
  reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}]
});