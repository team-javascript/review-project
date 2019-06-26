const mongoose = require("mongoose");

const Comment = require("../models/comments/comment");

class CommentController {
  static addComment(req, res, next) {
    const comment = req.body.comment;

    const commentToAdd = new Comment({
      comment
    });

    Review.findById(reviewId, (err, comment) => {
      reviewId.comments.push(comment);
      Comment.reviews.push(reviewToAdd);

      commentToAdd.save((err, comment) => {
        if (err) return console.error(err);
        res.redirect("/review/:id");
      });
    });
  }
}

module.exports = CommentController;
