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
