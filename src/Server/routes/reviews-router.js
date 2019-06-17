const express = require("express");
const router = express.Router();

const ReviewController = require("../controllers/review-controller");
// const ReviewRepository = require("../models/Reviews/review-repository");
/* GET reviews. */
router.get("/", ReviewController.renderReviews);

/* GET review. */
router.get("/:id", ReviewController.renderReview);

router.post("/add", ReviewController.addReview);

module.exports = router;
