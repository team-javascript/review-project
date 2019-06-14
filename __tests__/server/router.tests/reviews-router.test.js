const ReviewController = require("../../../src/Server/controllers/review-controller");
jest.mock("../../../src/Server/controllers/review-controller.js");

const request = require("supertest");
const app = require("../../../app");

describe("Books router/controller", () => {
  test("Should successfully connect to '/reviews' ", done => {
    //Arrange
    request(app)
      .get("/reviews")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
