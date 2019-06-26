const mongoose = require("mongoose");

const Comment = require("../models/comments/comment");
const Review = require("../models/Reviews/review");

class CommentController {
  static addComment(req, res, next) {
    const comment = req.body.comment;
    const author = req.body.author;
    const reviewId = req.params.id;

    Review.findById(reviewId, (err, review) => {
      const commentToAdd = new Comment({
        input: comment,
        author,
        review
      });
      review.comments.push(commentToAdd);
      // commentToAdd.reviews.push(reviewId);

      review.save((err, review) => {
        if (err) return console.error(err);
      });

      commentToAdd.save((err, commentToAdd) => {
        if (err) return console.error(err);
        res.redirect(`/reviews/${reviewId}`);
      });
    });
  }
}

module.exports = CommentController;
