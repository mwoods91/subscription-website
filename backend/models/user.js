const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  client_reference_id: {
    type: String,
    trim: true,
    required: true,
  },
  fullname: {
    type: String,
    trim: true,
    required: true,
  },

  dob: {
    type: Date,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  },

  stripe_customer_id: String,
  subscriptions: [],
});

module.exports = mongoose.model("User", userSchema);
