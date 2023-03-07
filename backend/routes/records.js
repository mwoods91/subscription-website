const express = require("express");
const { requireSignin } = require("../middlewares");

const router = express.Router();

const { getRecords, getUser } = require("../controllers/records");

router.get("/records", requireSignin, getRecords);
router.get("/profile", requireSignin, getUser);

module.exports = router;
