const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: { type: String, required: true },
  userType: {
    type: String,
    required: true,
    default: "owner",
  },
  verification: {
    type: String,
  },
  verified: {
    type: Boolean,
    required: true,
    default: false,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const OwnerModel = mongoose.model("owners", OwnerSchema);

module.exports = OwnerModel;
