const ReviewRepository = require("./Reviews/review-repository");
const Review = require("./Reviews/review");

const repo = new ReviewRepository();

function populateReviews() {
  repo.addReview(
    new Review(1, "test this", "this test", "really works", "watch")
  );
  repo.addReview(
    new Review(2, "Test title", "Test", "test image url", "test category")
  );
  repo.addReview(
    new Review(3, "test title 2", "test2", "test image url2", "test category2")
  );
  repo.addReview(
    new Review(4, "test title3", "test3", "test image url3", "test category3")
  );
  repo.addReview(
    new Review(5, "test title3", "test3", "test image url3", "test category3")
  );
}

populateReviews();

module.exports = repo;
