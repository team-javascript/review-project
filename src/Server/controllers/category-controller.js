const mongoose = require("mongoose");

const Category = require("../models/category/category");

class CategoryController {
  static renderCategories(req, res, next) {
      Category.find({}, (err, categories) => {
        res.render("categories", { categories });
      });
    };

  static renderCategory(req, res, next) {
    const id = req.params.id;
    var query = Category.where({ _id: id });
    query.findOne((err, category) => {
      if (err) return console.error(err);
      if (category) {
        res.render("category", { category });
      }
    });
  }
  static addCategory(req, res, next) {
    const category = req.body.category;

    const categoryToAdd = new Category({
      category
    });

    categoryToAdd.save((err, categories) => {
      if (err) return console.error(err);
      res.redirect("/categories");
    });
  }
}

module.exports = CategoryController;
