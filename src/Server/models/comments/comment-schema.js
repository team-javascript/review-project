const mongoose = require("mongoose");


module.exports = new mongoose.Schema({
  input: {type: String},
  reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}]
});