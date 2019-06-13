const Review = require("./review");

class ReviewRepository {
  constructor() {
    this._reviewList = {};
  }

  get reviews() {
    return this._reviewList;
  }

  addReview(review) {
    if (review.constructor !== Review) {
      throw new Error("Only reviews may be added!");
    }
    this._reviewList[review.id] = review;
  }

  removeReview(id) {
    delete this._reviewList[id];
  }

  getReview(id) {
    return this._reviewList[id];
  }
}

module.exports = ReviewRepository;
