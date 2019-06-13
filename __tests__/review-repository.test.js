const ReviewRepository = require("../src/review-repository");
const Review = require("../src/review");

describe("ReviewRepository", () => {
  test("Should return array", () => {
    const underTest = new ReviewRepository();
    const actual = underTest.reviewList;
    expect(actual).toStrictEqual([]);
  });

  test("Should add value to array", () => {
    const underTest = new ReviewRepository();
    const meme = new Review("hey there");
    underTest.addReview(meme);
    const actual = underTest.reviewSize;
    expect(actual).toEqual(1);
  });

  test("Should remove value from end of array", () => {
    const underTest = new ReviewRepository();
    const meme = new Review("hey there");
    underTest.addReview(meme);
    underTest.removeReview();
    const actual = underTest.reviewSize;
    expect(actual).toEqual(0);
  });

  test("Should add an item to the repository", () => {
    const underTest = new ReviewRepository();
    const meme = new Review("memeReview")
    underTest.addReview(meme)
    const actual = underTest.

  });



});
    // test("Should return an array length", () => {
    //   const underTest = new ReviewCollection();
    //   const meme = new Review("Daniel");
    //   underTest.addReview(meme);
    //   const actual = underTest.reviewSize;
    //   expect(actual).toEqual(1);
    // })
