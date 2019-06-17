var express = require("express");
var router = express.Router();

const AddController = require("../controllers/add-controller");

/* GET home page. */
router.get("/", AddController.renderReview);

module.exports = router;
