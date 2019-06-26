const express = require("express");
const router = express.Router();

const CommentsController = require("../controllers/comments-controller");
/* GET reviews. */
router.get("/", CommentsController.renderComments);

/* GET review. */
router.get("/:id", CommentsController.renderComment);

router.post("/add", CommentsController.addComment);

module.exports = router;
