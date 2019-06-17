const AddReviewController = require("../../../src/Server/controllers/add-controller");
jest.mock("../../../src/server/controllers/review-controller.js");

const request = require("supertest");
const app = require("../../../app");

describe("Add Review Router/Controller", () => {
  test("should successfully connect to /add", done => {
    //Arrange
    request(app)
      //Act
      .get("/add")
      .then(response => {
        //assert
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
