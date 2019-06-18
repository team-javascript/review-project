const mongoose = require("mongoose")

const Review = require("../models/Reviews/review");

class ReviewController {
  static renderReviews(req, res, next) {
    Review.find({}, (err, reviews) => {
      res.render("reviews", { reviews });
    });
  }

  static renderReview(req, res, next) {
    const id = req.params.id;
    var query = Review.where({ _id: id });
    query.findOne((err, review) => {
      if (err) return handleError(err);
      if (review) {
        res.render("review", { review });
      }
    });
  }

  static addReview(req, res, next) {
    const title = req.body.title;
    const content = req.body.content;
    const category = req.body.category;
    const imageUrl = req.body.imageUrl;


    const reviewToAdd = new Review({
      title, 
      content, 
      category, 
      imageUrl
    });
  
    reviewToAdd.save((error, reviewToAdd) => {
      if (error) return console.error(error);
      res.redirect("/reviews");
    })
  }
}




module.exports = ReviewController;
