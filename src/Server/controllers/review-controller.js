const data = require("../models/populator");

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
}

module.exports = ReviewController;
