const express = require("express");

const router = express.Router();
const { requireSignin } = require("../middlewares");

const {
  register,
  sendOTP,
  verifyEmail,
  updateUser,
} = require("../controllers/auth");

router.post("/register", register);
router.post("/send-otp", sendOTP);
router.post("/verify-email", verifyEmail);
router.put("/update-user", requireSignin, updateUser);

module.exports = router;
