const data = require("../models/populator");

class AddController {
  static renderReview(req, res, send) {
    const add = data.reviews;
    res.render("add", { add });
  }
}

module.exports = AddController;
