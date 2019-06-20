const express = require("express");
const router = express.Router();

const CategoryController = require("../controllers/category-controller");
/* GET reviews. */
router.get("/", CategoryController.renderCategories);

/* GET review. */
router.get("/:id", CategoryController.renderCategory);

router.post("/add", CategoryController.addCategory);

module.exports = router;
