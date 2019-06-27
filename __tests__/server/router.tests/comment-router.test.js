const CategoryController = require("../../../src/Server/controllers/category-controller");
jest.mock("../../../src/Server/controllers/category-controller.js");

const request = require("supertest");
const app = require("../../../app");

describe("Comments router/controller", () => {
  test("Should successfully connect to '/comments' ", done => {
    //Arrange
    request(app)
      .get("/comments")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
//   test("Should render a list of categories for each provided review when route is '/categories' ", done => {
//     //Arrange
//     request(app)
//       .get("/categories")
//       .then(response => {
//           expect(response.text).toBe(
//               '<!DOCTYPE html>\r\n<html lang="en">\r\n\r\n<head>\r\n   <meta charset="UTF-8">\r\n   <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n   <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n   <link rel=\'stylesheet\' type="text/css" href="/stylesheets/style.css" media="all" />\r\n   <title>...Welp...</title>\r\n</head>\r\n\r\n<body>\r\n   <div class="layout__wrapper">\r\n      <header class="layout__header">\r\n         <h1 class="grid-center">...Welp...</h1>\r\n         <nav class="grid-right">\r\n            <ul class="nav__menu__list">\r\n               <li class="nav__menu__list__item"><a href="/reviews">Reviews</a></li>\r\n               <li class="nav__menu__list__item"><a href="/categories">Categories</a></li>\r\n               <li class="nav__menu__list__item"><a href="/tags">Tags</a></li>\r\n            </ul>\r\n         </nav>\r\n      </header>\r\n      <main>\r\n    <form class="category-form" action="/categories/add" method="POST">\r\n        <label>Category: <input type="text" name="category"></label>\r\n            <button class="Submit__button">Submit</button>\r\n    </form>\r\n    <ul class="category__list">\r\n        <li>\r\n            <a href="/categories/">Test category</a>\r\n        </li>\r\n    </ul>\r\n</main>\r\n      <a class="home__button" href="/">Back To Home</a>\r\n      <footer class="layout__footer">\r\n         <small class="layout__footer__copy">&copy; Aquisitions Inc, 2019</small>\r\n      </footer>\r\n   </div>\r\n</body>'
//               );
//               done();
//             });
//         });
        
//         test("should successfully connect to '/categories/1'", done => {
//             // Arrange
//             request(app)
//             // Act
//             .get("/categories/1")
//             .then(response => {
//                 // Assert
                
//                 expect(response.statusCode).toBe(200);
//                 done();
//             });
//         });
        
//         test("should render a single category", done => {
//             // Arrange
//             request(app)
//             // Act
//             .get("/categories/1")
//             .then(response => {
//                 // console.log(response)
//                 // Assert
//                 expect(response.text).toBe(
//           `<!DOCTYPE html>\r\n<html lang="en">\r\n\r\n<head>\r\n   <meta charset="UTF-8">\r\n   <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n   <meta http-equiv="X-UA-Compatible" content="ie=edge">\r\n   <link rel=\'stylesheet\' type="text/css" href="/stylesheets/style.css" media="all" />\r\n   <title>...Welp...</title>\r\n</head>\r\n\r\n<body>\r\n   <div class="layout__wrapper">\r\n      <header class="layout__header">\r\n         <h1 class="grid-center">...Welp...</h1>\r\n         <nav class="grid-right">\r\n            <ul class="nav__menu__list">\r\n               <li class="nav__menu__list__item"><a href="/reviews">Reviews</a></li>\r\n               <li class="nav__menu__list__item"><a href="/categories">Categories</a></li>\r\n               <li class="nav__menu__list__item"><a href="/tags">Tags</a></li>\r\n            </ul>\r\n         </nav>\r\n      </header>\r\n      <main>\r\n    <section class="category-details">\r\n        <h1 class="category__name"></h1>\r\n        <ul class="category__list">\r\n        </ul>\r\n    </section>\r\n</main>\r\n      <a class="home__button" href="/">Back To Home</a>\r\n      <footer class="layout__footer">\r\n         <small class="layout__footer__copy">&copy; Aquisitions Inc, 2019</small>\r\n      </footer>\r\n   </div>\r\n</body>`
//         );
//         done();
//       });
//   });
// });
