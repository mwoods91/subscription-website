const express = require("express");

const router = express.Router();

const { test, register, sendOTP, verifyEmail } = require("../controllers/auth");

router.post("/test", test);
router.post("/register", register);
router.post("/send-otp", sendOTP);
router.post("/verify-email", verifyEmail);

module.exports = router;
