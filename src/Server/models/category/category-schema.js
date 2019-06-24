const mongoose = require("mongoose");

const reviewSchema = require("../Reviews/review-schema");

module.exports = new mongoose.Schema({
  categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
  reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}]
});
