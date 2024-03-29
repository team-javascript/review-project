const express = require("express");
const router = express.Router();

const ReviewController = require("../controllers/review-controller");
const CommentController = require("../controllers/comment-controller");
/* GET reviews. */
router.get("/", ReviewController.renderReviews);

/* GET review. */
router.get("/:id", ReviewController.renderReview);

router.post("/add", ReviewController.addReview);

router.post("/:id/addComment", CommentController.addComment);

router.get("/:id/increaseRating", ReviewController.increaseRating  )

router.get("/:id/decreaseRating", ReviewController.decreaseRating)

module.exports = router;
