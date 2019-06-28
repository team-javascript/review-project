const TagController = require("../../../src/Server/controllers/tag-controller");
jest.mock("../../../src/Server/controllers/tag-controller.js");

const request = require("supertest");
const app = require("../../../app");

describe("Tags router/controller", () => {
  test("Should successfully connect to '/tags' ", done => {
    //Arrange
    request(app)
      .get("/tags")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
  test("Should render a list of tags for each provided review when route is '/tags' ", done => {
    //Arrange
    request(app)
      .get("/tags")
      .then(response => {
        console.log(response)
        expect(response.text).toBe(
          '<!DOCTYPE html>\r\n<html lang="en">\r\n\r\n<head>\r\n   <meta charset="UTF-8">\r\n   <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n   <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n   <link rel=\'stylesheet\' type="text/css" href="/stylesheets/style.css" media="all" />\r\n   <title>...Welp...</title>\r\n   <link rel="Welp Icon" href="/pictures/Welp icon final.png">\r\n</head>\r\n\r\n<body>\r\n   <div class="layout__wrapper">\r\n      <header class="layout__header">\r\n         <div class="grid-center">\r\n\r\n            <img src="/pictures/Welp Logo Final.png" alt="Welp Logo" class="grid-center__image">\r\n         </div>\r\n         <nav class="grid-right">\r\n            <ul class="nav__menu__list">\r\n               <li class="nav__menu__list__item"><a class="nav__name" href="/reviews">Reviews</a></li>\r\n               <li class="nav__menu__list__item"><a class="nav__name" href="/categories">Categories</a></li>\r\n               <li class="nav__menu__list__item"><a class="nav__name" href="/tags">Tags</a></li>\r\n            </ul>\r\n         </nav>\r\n      </header>\r\n      <main>\r\n    <form class="form" action="/tags/add" method="POST">\r\n        \r\n        <label> <input type="text" name="name" placeholder="Hashtag"></label>\r\n        <button class="submit__button">New Hashtag</button>\r\n    </form>\r\n    <ul class="list">\r\n        <li class="list__item">\r\n            <a href="/tags/5"><div>Test name</div></a>\r\n        </li>\r\n    </ul>\r\n</main>\r\n      <footer class="layout__footer">\r\n         <small class="layout__footer__copy">&copy; Aquisitions Inc, 2019</small>\r\n         <a class="home__button" href="/">Back To Home</a>\r\n      </footer>\r\n   </div>\r\n</body>'
        );
        done();
      });
  });

  test("should successfully connect to '/tags/1'", done => {
    // Arrange
    request(app)
      // Act
      .get("/tags/1")
      .then(response => {
        // Assert

        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("should render a single tag", done => {
    // Arrange
    request(app)
      // Act
      .get("/tags/1")
      .then(response => {
        // Assert
        expect(response.text).toBe(
          `<!DOCTYPE html>\r\n<html lang="en">\r\n\r\n<head>\r\n   <meta charset="UTF-8">\r\n   <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n   <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n   <link rel=\'stylesheet\' type="text/css" href="/stylesheets/style.css" media="all" />\r\n   <title>...Welp...</title>\r\n   <link rel="Welp Icon" href="/pictures/Welp icon final.png">\r\n</head>\r\n\r\n<body>\r\n   <div class="layout__wrapper">\r\n      <header class="layout__header">\r\n         <div class="grid-center">\r\n\r\n            <img src="/pictures/Welp Logo Final.png" alt="Welp Logo" class="grid-center__image">\r\n         </div>\r\n         <nav class="grid-right">\r\n            <ul class="nav__menu__list">\r\n               <li class="nav__menu__list__item"><a class="nav__name" href="/reviews">Reviews</a></li>\r\n               <li class="nav__menu__list__item"><a class="nav__name" href="/categories">Categories</a></li>\r\n               <li class="nav__menu__list__item"><a class="nav__name" href="/tags">Tags</a></li>\r\n            </ul>\r\n         </nav>\r\n      </header>\r\n      <main>\r\n    <section class="tag-details">\r\n        <h1 class="tag__name"></h1>\r\n        <ul class="list">\r\n        </ul>\r\n    </section>\r\n</main>\r\n      <footer class="layout__footer">\r\n         <small class="layout__footer__copy">&copy; Aquisitions Inc, 2019</small>\r\n         <a class="home__button" href="/">Back To Home</a>\r\n      </footer>\r\n   </div>\r\n</body>`
        );
        done();
      });
  });
});
