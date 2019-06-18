var express = require("express");
var router = express.Router();

const ReviewController = require("../controllers/review-controller");
const ReviewRepository = require("../models/Reviews/review-repository");

/* GET home page. */
router.get("/", ReviewController.renderReviews);

module.exports = router;
