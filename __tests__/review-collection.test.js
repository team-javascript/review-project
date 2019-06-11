const ReviewCollection = require("../src/review-collection");
const Review = require("../src/review");

describe("ReviewCollection", () => {
  test("Should return array", () => {
    const underTest = new ReviewCollection();
    const actual = underTest.reviewList;
    expect(actual).toStrictEqual([]);
  });

  test("Should add value to array", () => {
    const underTest = new ReviewCollection();
    const meme = new Review("hey there");
    underTest.addReview(meme);
    const actual = underTest.reviewSize;
    expect(actual).toEqual(1);
  });

  test("Should remove value from end of array", () => {
    const underTest = new ReviewCollection();
    const meme = new Review("hey there");
    underTest.addReview(meme);
    underTest.removeReview();
    const actual = underTest.reviewSize;
    expect(actual).toEqual(0);
  });

  // test("Should return an array length", () => {
  //   const underTest = new ReviewCollection();
  //   const meme = new Review("Daniel");
  //   underTest.addReview(meme);
  //   const actual = underTest.reviewSize;
  //   expect(actual).toEqual(1);
  // })
});
