const mongoose = require("mongoose");

const reviewSchema = require("../Reviews/review-schema");

module.exports = new mongoose.Schema({
  tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}],
  reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}]
});
