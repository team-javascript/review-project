const ReviewController = require("../../../src/Server/controllers/review-controller");
jest.mock("../../../src/Server/controllers/review-controller.js");

const request = require("supertest");
const app = require("../../../app");

describe("Reviews router/controller", () => {
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
        expect(response.text).toBe(
          '<!DOCTYPE html>\r\n<html lang="en">\r\n\r\n<head>\r\n   <meta charset="UTF-8">\r\n   <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n   <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n   <link rel=\'stylesheet\' type="text/css" href="stylesheets/style.css" media="all" />\r\n   <title>Welp...</title>\r\n</head>\r\n\r\n<body>\r\n   <div class="wrapper">\r\n      <header class="main__header">\r\n         <h1 class="header__title">Welp...</h1>\r\n      </header>\r\n      <main>\r\n   <div class="container">\r\n      <ul class="meme__cards">\r\n         <li class="meme__card">\r\n            <figure class="meme__fegure"><img class="meme__image" src="test URL" alt="Test Title"></figure>\r\n            <a class="meme__link" href="/reviews/5">Test Title</a>\r\n         </li>\r\n      </ul>\r\n      <nav class="nav__tab">\r\n         <ul class="nav__tabs">\r\n            <li class="tab"><a href=""></a></li>\r\n            <li class="tab"><a href="/views/reviews.hbs">Reviews</a></li>\r\n         </ul>\r\n      </nav>\r\n   </div>\r\n</main>\r\n      <a href="/">Back to Home</a>\r\n      <footer class="footer">\r\n         <small class="footer__copy">&copy; Aquisitions Inc, 2019</small>\r\n      </footer>\r\n   </div>\r\n</body>'
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

        // console.log(response);
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
        // console.log(response);
        expect(response.text).toBe(
          `<!DOCTYPE html>\r\n<html lang="en">\r\n\r\n<head>\r\n   <meta charset="UTF-8">\r\n   <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n   <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n   <link rel=\'stylesheet\' type="text/css" href="stylesheets/style.css" media="all" />\r\n   <title>Welp...</title>\r\n</head>\r\n\r\n<body>\r\n   <div class="wrapper">\r\n      <header class="main__header">\r\n         <h1 class="header__title">Welp...</h1>\r\n      </header>\r\n      <main>\r\n    <section class="review-details">\r\n        <h1></h1>\r\n        <h2></h2>\r\n    </section>\r\n    <ul>\r\n        <li>ISBN: </li>\r\n        <li>Description: </li>\r\n    </ul>\r\n</main>\r\n      <a href="/">Back to Home</a>\r\n      <footer class="footer">\r\n         <small class="footer__copy">&copy; Aquisitions Inc, 2019</small>\r\n      </footer>\r\n   </div>\r\n</body>`
        );
        done();
      });
  });
});
