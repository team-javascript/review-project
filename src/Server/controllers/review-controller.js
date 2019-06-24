const mongoose = require("mongoose");

const Review = require("../models/Reviews/review");
const Category = require("../models/category/category");
const Tag = require("../models/tag/tag")

class ReviewController {
  static renderReviews(req, res, next) {
    Review.find({}, (err, reviews) => {
      Category.find({}, (err, categories) => {
        Tag.find({}, (err, tags) => {
         res.render("reviews", { reviews, categories, tags });
        });
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
    const categoryName = req.body.category;
    const imageUrl = req.body.imageUrl;
    const tagName = req.body.tag;

    const reviewToAdd = new Review({
      title,
      content,
      imageUrl
    });

    Tag.find(tagName, (err, tag) => {
      tag.forEach(tag => {
        reviewToAdd.tags.push(tag);
        tag.reviews.push(reviewToAdd);
        tag.save((err, tag) => {
          if (err) return console.error(err);
        })
    });
  });
  
    Category.findById(categoryName, (err, category) => {
      reviewToAdd.categories.push(category);
      category.reviews.push(reviewToAdd);
      category.save((err, category) => {
        if (err) return console.error(err);
      });

      reviewToAdd.save((error, reviewToAdd) => {
        if (error) return console.error(error);
        res.redirect("/reviews");
      });
    });

  };
};

module.exports = ReviewController;
