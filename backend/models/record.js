const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecordsSchema = new Schema({
  patient_record: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  physician: {
    type: String,
    trim: true,
  },
  implant_center: {
    type: String,
    trim: true,
  },
  implant_Phone: {
    type: String,
    trim: true,
  },
  implant_date: {
    type: Date,
    trim: true,
  },
  device_type: {
    type: String,
    trim: true,
  },
  generator_manufaturer: {
    type: String,
    trim: true,
  },

  generator_model_name: {
    type: String,
    trim: true,
  },
  generator_model_number: {
    type: String,
    trim: true,
  },
  generator_serial_number: {
    type: String,
  },
  atrial_manufaturer: {
    type: String,
    trim: true,
  },
  atrial_model_name: {
    type: String,
    trim: true,
  },
  atrial_length: {
    type: String,
    trim: true,
  },
  atrial_serial_number: {
    type: String,
  },
  lv_manufaturer: {
    type: String,
    trim: true,
  },
  lv_model_name: {
    type: String,
    trim: true,
  },
  lv_length: {
    type: String,
    trim: true,
  },
  lv_serial_number: {
    type: String,
  },
  rv_manufaturer: {
    type: String,
    trim: true,
  },
  rv_model_name: {
    type: String,
    trim: true,
  },
  rv_length: {
    type: String,
    trim: true,
  },
  rv_serial_number: {
    type: String,
  },
});

module.exports = mongoose.model("Record", RecordsSchema);
