const mongoose = require("mongoose");

const Tag = require("../models/tag/tag");

class TagController {
  static renderTags(req, res, next) {
      Tag.find({}, (err, allTags) => {
        res.render("allTags", { allTags });
      });
    };

  static renderTag(req, res, next) {
    const id = req.params.id;
    var query = Tag.where({ _id: id });
    query.findOne((err, singleTag) => {
      if (err) return console.error(err);
      if (singleTag) {
        res.render("singleTag", { singleTag });
      }
    });
  }
  static addTag(req, res, next) {
    const tag = req.body.tag;

    const tagToAdd = new Tag({
      tag
    });

    tagToAdd.save((err, tags) => {
      if (err) return console.error(err);
      res.redirect("/allTags");
    });
  }
}

module.exports = TagController;
