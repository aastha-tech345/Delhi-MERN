const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Schema, model } = mongoose;

<<<<<<< HEAD
=======
const usercreationSchema = new Schema({
  // user_name: { type: String },
  f_name: { type: String },
  l_name: { type: String },
  street: { type: String },
  plz: { type: String },
  city: { type: String },
  email: { type: String },
  location: { type: String },
  tel: { type: String },
  mob: { type: String },
  // select_role:{type:String},
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
});

const passwordSchema = new Schema({
  password: { type: String },
});

const localizationSchema = new Schema({
  location: { type: String },
});

const advancedSchema = new Schema({
  advanced: { type: String },
});

const notificationSchema = new Schema({
  notification: { type: String },
});

>>>>>>> 8e56815e20b1887101f44c5659e633f2f93feea2
const userSchema = new Schema({
  username: { type: String },
  email: {
    type: String,
    lowercase: true,
    unique: true,
  },
  password: { type: String },
<<<<<<< HEAD
  gender: { type: String },
  lname: { type: String },
  mobile: { type: String },
  profileImage: { type: String },
=======
  mobile: { type: String },
>>>>>>> 8e56815e20b1887101f44c5659e633f2f93feea2
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
  role: {
    type: String,
  },
<<<<<<< HEAD
  street: { type: String },
  plz: { type: String },
  city: { type: String },
  employee_id: { type: String },
  employee_fname: { type: String },
  employee_lname: { type: String },
  employee_location: { type: String },
  employee_password: { type: String },
  employee_email: { type: String },
  employee_mobile: { type: String },
  employee_tel: { type: String },
  employee_street: { type: String },
  employee_plz: { type: String },
  employee_city: { type: String },
  employee_timeZone: { type: String },
  user_id: { type: mongoose.Schema.Types.ObjectId },
  parent_id: { type: mongoose.Schema.Types.ObjectId },
=======
  employee_creation: [
    {
      users: usercreationSchema,
      password: passwordSchema,
      localization: localizationSchema,
      notification: notificationSchema,
      advanced: advancedSchema,
    },
  ],
  parent_id: { type: String },
>>>>>>> 8e56815e20b1887101f44c5659e633f2f93feea2
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
