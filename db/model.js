const mongoose = require(".");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true
    },
    age: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", User);
