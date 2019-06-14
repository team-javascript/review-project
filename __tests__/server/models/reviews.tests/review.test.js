const Review = require("../../../../src/Server/models/Reviews/review");

describe("Review", () => {
  test("Should return ID", () => {
    const underTest = new Review(101);
    const actual = underTest.id;
    expect(actual).toEqual(101);
  });

  test("Should return Title", () => {
    const underTest = new Review(123, "Damn Daniel");
    const actual = underTest.title;
    expect(actual).toBe("Damn Daniel");
  });

  test("Should return imageUrl", () => {
    const underTest = new Review(123, "Damn Daniel", "www.damndaniel.com");
    const actual = underTest.imageUrl;
    expect(actual).toBe("www.damndaniel.com");
  });

  test("Should return reviewCategory", () => {
    const underTest = new Review(123, "daniel", "www.damndaniel.com", "meme");
    const actual = underTest.reviewCategory;
    expect(actual).toBe("meme");
  });

  test("Should return content", () => {
    const underTest = new Review(
      123,
      "Damn Daniel",
      "www.damndaniel.com",
      "meme",
      "Daniel is behind"
    );
    const actual = underTest.content;
    expect(actual).toBe("Daniel is behind");
  });
});
