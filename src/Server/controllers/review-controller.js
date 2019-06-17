const data = require("../models/populator");
const newReview = require("../models/Reviews/review-repository");

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
    const id = req.params.id;
    const reviews = newReview.addReview(id);
    res.render("reviews", { reviews });
  }
}

module.exports = ReviewController;
