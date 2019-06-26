const mongoose = require("mongoose");

const Review = require("../models/Reviews/review");
const Category = require("../models/category/category");
const Tag = require("../models/tag/tag");
const Comment = require("../models/comments/comment");

class ReviewController {
  static async renderReviews(req, res, next) {
    const reviews = await Review.find({});
    const categories = await Category.find({});
    const tags = await Tag.find({});
    res.render("reviews", { reviews, categories, tags });
  }

  static async renderReview(req, res, next) {
    const id = req.params.id;
    const review = await Review.where({ _id: id })
      .findOne()
      .populate(["categories", "tags", "comments"])
      .exec();
    res.render("review", { review });
  }

  static addReview(req, res, next) {
    const title = req.body.title;
    const content = req.body.content;
    const categoryId = req.body.category;
    const imageUrl = req.body.imageUrl;
    const tags = req.body.tag;

    const reviewToAdd = new Review({
      title,
      content,
      imageUrl
    });

    Tag.find({ _id: tags }, (err, tags) => {
      Category.findById(categoryId, (err, category) => {
        reviewToAdd.categories.push(category);
        category.reviews.push(reviewToAdd);
        tags.forEach(tag => {
          reviewToAdd.tags.push(tag);
          tag.reviews.push(reviewToAdd);
          tag.save((err, tag) => {
            if (err) return console.error(err);
          });
        });

        category.save((err, category) => {
          if (err) return console.error(err);
        });

        reviewToAdd.save((error, reviewToAdd) => {
          if (error) return console.error(error);
          res.redirect("/reviews");
        });
      });
    });
  }
}

module.exports = ReviewController;
