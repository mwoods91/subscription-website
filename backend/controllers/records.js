const User = require("../models/user");
const Record = require("../models/record");
const { sendError } = require("../utils/helper");

exports.getRecords = async (req, res) => {
  try {
    const records = await Record.find().populate("patient_record");

    if (!records) {
      if (!records) return sendError(res, "User Not Found!");
    }

    res.json(records);
  } catch (err) {
    console.log(err);
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      if (!user) return sendError(res, "User Not Found!");
    }
    res.json(user);
  } catch (err) {
    console.log(err);
  }
};
