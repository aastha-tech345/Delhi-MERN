const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Schema, model } = require('mongoose');

const usercreationSchema = new Schema({
  user_name: { type: String },
  user_email: { type: String },
  roll: { type: String },
});

const passwordSchema = new Schema({
  user_name: { type: String },
  user_email: { type: String },
  password: { type: String },
});

const localizationSchema = new Schema({
  user_name: { type: String },
  user_address: { type: String },
});

const advancedSchema = new Schema({
  user_name: { type: String },
  user_email: { type: String },
  password: { type: String },
});

const notificationSchema = new Schema({
  user_name: { type: String },
  user_email: { type: String },
  password: { type: String },
});

const userSchema = new Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  mobile: { type: String },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  role: { type: String },
  user_creation: [{
    users: usercreationSchema,
    password: passwordSchema,
    localization: localizationSchema,
    notification: notificationSchema,
    advanced: advancedSchema,
  }],
  parent_id: { type: String },
});


userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 15);
  }
  next();
});

userSchema.methods.getAuthToken = async function () {
  let params = {
    id: this._id,
    email: this.email,
    password: this.password,
    role: this.role,
  };
  let secretKey = "gdshskfjkdggndh";
  var tokenValue = jwt.sign(params, secretKey);
  this.tokens = this.tokens.concat({ token: tokenValue });
  await this.save();
  return tokenValue;
};
const User = mongoose.model("user", userSchema, "user");

module.exports = {
  User,
};
