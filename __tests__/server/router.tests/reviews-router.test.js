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

  test("Should render a list of reviews for each provided review when route is '/reviews' ", done => {
    //Arrange
    request(app)
      .get("/reviews")
      .then(response => {
        console.log(response);
        expect(response.text).toBe(``);
        done();
      });
  });
});
