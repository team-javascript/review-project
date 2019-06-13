class HomeController {
  static renderHomePage(req, res, next) {
    res.redirect("/reviews");
  }
}

module.exports = HomeController;
