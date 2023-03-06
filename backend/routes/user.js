const express = require("express");
const { requireSignin } = require("../middlewares");

const router = express.Router();

const { getProfile } = require("../controllers/user");

router.get("/profile", requireSignin, getProfile);

module.exports = router;
