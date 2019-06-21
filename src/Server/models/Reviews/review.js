const reviewSchema = require("../Reviews/review-schema");
const mongoose = require("mongoose");


module.exports = mongoose.model('Review', reviewSchema)
