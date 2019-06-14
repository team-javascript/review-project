const ReviewRepository = require("../../../../src/Server/models/Reviews/review-repository");
const Review = require("../../../../src/Server/models/Reviews/review");

describe("ReviewRepository", () => {
  test("Should add an item to the repository", () => {
    const underTest = new ReviewRepository();
    const meme = new Review("meme");
    underTest.addReview(meme);
    const actual = underTest.reviews;
    expect(actual).toStrictEqual({ meme });
  });
});
