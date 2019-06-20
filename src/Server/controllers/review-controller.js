const mongoose = require("mongoose");

const Review = require("../models/Reviews/review");
const Category = require("../models/Schema/category");

class ReviewController {
  static renderReviews(req, res, next) {
    Review.find({}, (err, reviews) => {
      Category.find({}, (err, categories) => {
        res.render("reviews", { categories, reviews });
      });
    });
  }

  static renderReview(req, res, next) {
    const id = req.params.id;
    var query = Review.where({ _id: id });
    query.findOne((err, review) => {
      if (err) return console.error(err);
      if (review) {
        res.render("review", { review });
      }
    });
  }
  static addReview(req, res, next) {
    const title = req.body.title;
    const content = req.body.content;
    const categoryId = req.body.categoryId;
    const imageUrl = req.body.imageUrl;

    const reviewToAdd = new Review({
      title,
      content,
      imageUrl
    });

    Category.findById(categoryId, (err, category) => {
      category.reviews.push(reviewToAdd);
      reviewToAdd.category.push(category);
      
      category.save((err, category) => {
        if (err) return console.error(err);
      });
      
      reviewToAdd.save((error, reviewToAdd) => {
        if (error) return console.error(error);
        res.redirect("/reviews");
      });
    });
  }
}

module.exports = ReviewController;
