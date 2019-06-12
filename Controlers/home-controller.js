class HomeController {
  static renderHomePage(req, res, next) {
    res.redirect("/review-collection");
  }
}
