const mongoose = require("mongoose");

module.exports = new mongoose.Schema({
  input: { type: String },
  review: { type: mongoose.Schema.Types.ObjectId, ref: "Review" }
});
