const mongoose = require("mongoose");

const Comment = require("../models/comments/comment");
const Review = require("../models/Reviews/review");

class CommentController {
  static addComment(req, res, next) {
    const comment = req.body.comment;

    const commentToAdd = new Comment({
      comment
    });

    Review.findById(reviewId, (err, comment) => {
      reviewId.comments.push(comment);
      Comment.reviews.push(reviewId);

      commentToAdd.save((err, comment) => {
        if (err) return console.error(err);
        res.redirect("/reviews");
      });
    });
  }
}

module.exports = CommentController;
