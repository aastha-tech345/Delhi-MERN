const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String },
  email: {
    type: String,
    lowercase: true,
    unique: true,
  },
  password: { type: String },
  mobile: { type: String },
  gender: { type: String },
  lname: { type: String },
  profileImage: { type: String },
  street: { type: String },
  plz: { type: String },
  city: { type: String },
  fname: { type: String },
  // lname: { type: String },
  location: { type: String },
  tel: { type: String },
  // plz: { type: String },
  // city: { type: String },
  timeZone: { type: String },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" }, // manager hr type roles
  user_role: { type: String }, // admin user employee
  parent_id: { type: mongoose.Schema.Types.ObjectId },
  added_by: { type: String },
  tokens: [
    {
      token: {
        type: String,
      },
    },
  ],
  verifytoken: {
    type: String,
  },
  // user_id: { type: mongoose.Schema.Types.ObjectId },
});

userSchema.pre("save", async function (next) {
  try {
    if (this.isNew || this.isModified("password")) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
    }
    next(); // Make sure to call next() in all cases
  } catch (error) {
    next(error); // Pass the error to the next middleware
  }
});

userSchema.methods.getAuthToken = async function () {
  let params = {
    id: this._id,
    email: this.email,
    password: this.password,
    role: this.role,
  };
  let keysecret = "gdshskfjkdggndh";
  var tokenValue = jwt.sign(params, keysecret);
  this.tokens = this.tokens.concat({ token: tokenValue });
  await this.save();
  return tokenValue;
};

const User = model("users", userSchema);
module.exports = { User };
