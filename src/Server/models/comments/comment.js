const commentSchema = require("./comment-schema")
const mongoose = require("mongoose")

module.exports = mongoose.model("Comment", commentSchema);