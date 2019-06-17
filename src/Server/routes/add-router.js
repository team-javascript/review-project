const express = require("express");
const router = express.Router();

const AddController = require("../controllers/add-controller");

/* Add book. */
router.get("/", AddController.renderReview);

module.exports = router;
