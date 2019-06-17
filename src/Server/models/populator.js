const ReviewRepository = require("./Reviews/review-repository");
const Review = require("./Reviews/review");

const repo = new ReviewRepository();

function populateReviews() {
  repo.addReview(
    new Review(
      1,
      "test this",
      "https://www.lifewire.com/thmb/miKAPcqjSNyQ960gpsFtoEjr17w=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sstMxMh-5ab00c7bfa6bcc003622e4f5.jpg",
      "really works",
      "watch"
    )
  );
  repo.addReview(
    new Review(
      2,
      "Test title",
      "https://www.lifewire.com/thmb/miKAPcqjSNyQ960gpsFtoEjr17w=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sstMxMh-5ab00c7bfa6bcc003622e4f5.jpg",
      "test image url",
      "test category"
    )
  );
  repo.addReview(
    new Review(
      3,
      "test title 2",
      "https://www.lifewire.com/thmb/miKAPcqjSNyQ960gpsFtoEjr17w=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sstMxMh-5ab00c7bfa6bcc003622e4f5.jpg",
      "test image url2",
      "test category2"
    )
  );
  repo.addReview(
    new Review(
      4,
      "test title3",
      "https://www.lifewire.com/thmb/miKAPcqjSNyQ960gpsFtoEjr17w=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sstMxMh-5ab00c7bfa6bcc003622e4f5.jpg",
      "test image url3",
      "test category3"
    )
  );
}

populateReviews();

module.exports = repo;
