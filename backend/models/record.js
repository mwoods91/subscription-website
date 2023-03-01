const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecordsSchema = new Schema({
  patient_record: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  generator_manufaturer: {
    type: String,
    trim: true,
  },

  generator_model_name: {
    type: Date,
    trim: true,
  },
  generator_model_number: {
    type: String,
    trim: true,
  },
  generator_serial_number: {
    type: String,
  },
});

module.exports = mongoose.model("Record", RecordsSchema);
