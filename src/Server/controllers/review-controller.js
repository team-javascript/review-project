const data = require("../models/populator");
const Review = require("../models/Reviews/review");

class ReviewController {
  static renderReviews(req, res, next) {
    const reviews = data.reviews;
    res.render("reviews", { reviews });
  }

  static renderReview(req, res, next) {
    const id = req.params.id;
    const review = data.getReview(id);
    res.render("review", { review });
  }

  static addReview(req, res, next) {
    // const id = req.body.id;
    const id = req.body.id;
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const reviewCategory = req.body.reviewCategory;
    const content = req.body.content;

    data.addReview(new Review(id, title, imageUrl, reviewCategory, content));

    res.redirect("/reviews");
    // const reviews = newReview.addReview(id);
    // res.render("reviews", { reviews });
  }
}

module.exports = ReviewController;
