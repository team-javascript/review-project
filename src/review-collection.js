class ReviewCollection {
  constructor(reviewList = []) {
    this._reviewList = reviewList;
  }
  addReview(review) {
    reviewList.push(review);
  }
}
