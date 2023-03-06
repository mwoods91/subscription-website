const express = require("express");
const { requireSignin } = require("../middlewares");

const router = express.Router();

const { getRecords } = require("../controllers/user");

router.get("/profile", requireSignin, getRecords);

module.exports = router;
