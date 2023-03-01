const express = require("express");

const router = express.Router();

const { register, sendOTP, verifyEmail } = require("../controllers/auth");

router.post("/register", register);
router.post("/send-otp", sendOTP);
router.post("/verify-email", verifyEmail);

module.exports = router;
