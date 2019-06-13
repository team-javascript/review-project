class HomeController {
  static renderHomePage(req, res, next) {
    res.redirect("/review-collection");
  }
}

module.exports = HomeController;
