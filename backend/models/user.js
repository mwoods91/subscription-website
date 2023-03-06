const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  client_reference_id: {
    type: String,
    trim: true,
    required: true,
  },
  prefix: {
    type: String,
    trim: true,
  },
  fullname: {
    type: String,
    trim: true,
    required: true,
  },
  address1: {
    type: String,
    trim: true,
  },
  address2: {
    type: String,
    trim: true,
  },
  county: {
    type: String,
    trim: true,
  },
  eircode: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  diagnosis: {
    type: String,
    trim: true,
  },
  indication: {
    type: String,
    trim: true,
  },
  dob: {
    type: String,
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
