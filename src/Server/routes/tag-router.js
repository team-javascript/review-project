const express = require("express");
const router = express.Router();

const TagController = require("../controllers/tag-controller");
/* GET reviews. */
router.get("/", TagController.renderTags);

/* GET review. */
router.get("/:id", TagController.renderTag);

router.post("/add", TagController.addTag);

module.exports = router;
