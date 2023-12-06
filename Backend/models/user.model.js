const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Schema, model } = mongoose;

const usercreationSchema = new Schema({
  user_name: { type: String },
  user_email: { type: String },
  role: { type:mongoose.Schema.Types.ObjectId,ref:"Role"},
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
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: { type: String },
  mobile: { type: String  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  verifytoken: {
    type: String,
  },
  role: {
    type: String,
  },
  employee_creation: {
    users: usercreationSchema,
    password: passwordSchema,
    localization: localizationSchema,
    notification: notificationSchema,
    advanced: advancedSchema,
  },
  parent_id: { type: String },
});

userSchema.pre("save", async function (next) {
  try {
    if (this.isNew) {
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
