const mongoose = require("mongoose");

const Comment = require("../models/comments/comment");

class CommentController {
  static renderComments(req, res, next) {
    Comment.find({}, (err, comments) => {
      res.render("comments", { comments });
    });
  }

  static renderComment(req, res, next) {
    const id = req.params.id;
    var query = Comment.where({ _id: id });
    query
      .findOne()
      .populate(["reviews"])
      .exec((err, comment) => {
        if (err) return console.error(err);
        if (comment) {
          res.render("comment", { comment });
        }
      });
  }
  static addComment(req, res, next) {
    const input = req.body.input;

    const commentToAdd = new Comment({
      input
    });

    commentToAdd.save((err, comments) => {
      if (err) return console.error(err);
      res.redirect("/comments");
    });
  }
}

module.exports = CommentController;
