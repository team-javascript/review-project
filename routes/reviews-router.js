const express = require("express");
const router = express.Router();

const ReviewController = require("../controllers/review-controller");

/* GET reviews. */
router.get("/", ReviewController.renderReviews);

/* GET review. */
router.get("/:id", ReviewController.renderReview);

module.exports = router;

/* GET users listing. */
// router.get("/", function(req, res, next) {
//   res.send("respond with a resource");
// });
