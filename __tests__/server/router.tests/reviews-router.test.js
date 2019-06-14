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
        // console.log(response);
        expect(response.text).toBe(
          '<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <link rel=\'stylesheet\' href=\'/stylesheets/style.css\' />\n  <title>Welp...</title>\n</head>\n\n<body>\n  <div class="wrapper">\n    <header class="main__header">\n      <h1>Welp...</h1>\n    </header>\n    <main>\n  <div class="container">\n    <ul class="review-cards">\n      <li class="review-card">\n        <figure><img src="test URL" alt="Test Title"></figure>\n        <a class="review-card__link" href="/reviews/5">Test Title</a>\n      </li>\n    </ul>\n    <nav>\n      <ul>\n        <li><a href=""></a></li>\n        <li><a href="/views/reviews.hbs">Reviews</a></li>\n      </ul>\n    </nav>\n  </div>\n  <a href="/">Back to Home</a>\n</main>\n    <footer class="footer">\n      <small class="footer__copy">&copy; Aquisitions Inc, 2019</small>\n    </footer>\n  </div>\n</body>'
        );
        done();
      });
  });

  test("should successfully connect to '/reviews/1'", done => {
    // Arrange
    request(app)
      // Act
      .get("/reviews/1")
      .then(response => {
        // Assert
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("should render a single review", done => {
    // Arrange
    request(app)
      // Act
      .get("/reviews/1")
      .then(response => {
        // Assert
        console.log(response);
        expect(response.text).toBe(
          `<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <link rel=\'stylesheet\' href=\'/stylesheets/style.css\' />\n  <title>Welp...</title>\n</head>\n\n<body>\n  <div class="wrapper">\n    <header class="main__header">\n      <h1>Welp...</h1>\n    </header>\n    <main>\n    <div class="container">\n        <ul class="review-cards">\n            <li class="review-card">\n                <figure><img src="test URL" alt="Test Title"></figure>\n                <a class="review-card__link" href="/review-collection/1">Test Title</a>\n            </li>\n        </ul>\n    </div>\n    <a href="/">Back to Home</a>\n</main>\n    <footer class="footer">\n      <small class="footer__copy">&copy; Aquisitions Inc, 2019</small>\n    </footer>\n  </div>\n</body>`
        );
        done();
      });
  });
});
