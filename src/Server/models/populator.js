const ReviewRepository = require("./Reviews/review-repository");
const Review = require("./Reviews/review");

const repo = new ReviewRepository();

function populateReviews() {
  repo.addReview(
    new Review(
      1,
      "Me and the boys in different tabs",
      "https://i.kym-cdn.com/photos/images/newsfeed/001/503/644/a9e.jpg",
      "This meme showcases how the boys feel going out on a typical friday night",
      "Funny meme"
    )
  );

  repo.addReview(
    new Review(
      2,
      "Legends of Stack Overflow",
      "https://preview.redd.it/ypn3iqc1whl21.jpg?width=640&crop=smart&auto=webp&s=d662c4bc00f4daec60f990d1e7f752278830e7dc",
      "The joke of this meme is the imposter syndrome that all devs feel inside",
      "Programming humor"
    )
  );

  repo.addReview(
    new Review(
      3,
      "My goal for 2018",
      "https://www.lifewire.com/thmb/miKAPcqjSNyQ960gpsFtoEjr17w=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sstMxMh-5ab00c7bfa6bcc003622e4f5.jpg",
      "This meme is about perpetually procrastinating on your goals",
      "Self-deprecating humor"
    )
  );
  repo.addReview(
    new Review(
      4,
      "'While' E. Coyote",
      "https://preview.redd.it/xn0r30skack21.jpg?width=640&crop=smart&auto=webp&s=c4e3036b81550c6767b94970a92c41771cd8428f",
      "This meme is a joke about while loops and a classic cartoon",
      "Programming humor"
    )
  );
}

populateReviews();

module.exports = repo;
