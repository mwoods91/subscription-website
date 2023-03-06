const User = require("../models/user");
const { sendError } = require("../utils/helper");

exports.getProfile = async (req, res) => {
  try {
    const profile = await User.findOne({ user: req.user._id });

    if (!profile) {
      if (!profile) return sendError(res, "User Not Found!");
    }

    res.json(profile);
  } catch (err) {
    console.log(err);
  }
};
