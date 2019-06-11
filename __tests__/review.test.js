const Review = require("../src/review");

describe("Review", () => {
    test("Should return ID", () => {
        const underTest = new Review(123);
        const actual = underTest.id;
        expect(actual).ToEqual(123);
    })
})