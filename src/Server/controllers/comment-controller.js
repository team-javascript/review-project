const mongoose = require("mongoose");

const Comment = require("../models/comments/comment");
const Review = require("../models/Reviews/review");

class CommentController {
  static addComment(req, res, next) {
    const comment = req.body.comment;
    const reviewId = req.params.id;

    Review.findById(reviewId, (err, review) => {
      const commentToAdd = new Comment({
        input: comment,
        review
      });
      review.comments.push(commentToAdd);
      // commentToAdd.reviews.push(reviewId);

      commentToAdd.save((err, comment) => {
        if (err) return console.error(err);
        res.redirect(`/reviews/${reviewId}`);
      });
    });
  }
}

module.exports = CommentController;
