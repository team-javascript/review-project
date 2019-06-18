//app factory function
const mongoose = require("mongoose")

module.exports = mongoose.model (
"Review",
  new mongoose.Schema({
    title: String,
    imageUrl: String,
    category: String,
    content: String
  })
);