const UserModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
// const nodemailer = require("nodemailer");
const mailer = require('../mailer/mailer')
const jwt = require("jsonwebtoken");
const keysecret = "asbndjhdjdkflfdghgj";

exports.register = async (req, res) => {
  try {
    const { username, password, email, role } = req.body;

    let userData;

    if (role === "admin") {
      userData = {
        username,
        password,
        email,
        role: role || "admin",
      };
    } else if (role === "user") {
      const admin = await UserModel.User.findOne({ role: "admin" });

      if (admin) {
        userData = {
          username,
          password,
          email,
          role,
          user_creation: {
            users: null,
            password: null,
            localization: null,
            notification: null,
            advanced: null,
          },
          added_by: null,
          parent_id: admin._id,
        };
      } else {
        return res
          .status(400)
          .send({ message: "No admin found to link as parent" });
      }
    } else if (role === "customer") {
      const user = await UserModel.User.findOne({ role: "user" });

      if (user) {
        userData = {
          username,
          password,
          email,
          role,
          role_id: null,
          parent_id: user._id,
        };
      } else {
        return res
          .status(400)
          .send({ message: "No user found to link as parent" });
      }
    } else {
      return res.status(400).send({ message: "Invalid role value" });
    }

    const userInstance = new UserModel.User(userData);
    const result = await userInstance.save();

    if (result) {
      const myToken = await userInstance.getAuthToken();

      if (myToken) {
        return res.status(201).send({
          result,
          message: "Token was generated successfully",
          token: myToken,
        });
      } else {
        return res.status(500).send({ message: "Token was not generated" });
      }
    } else {
      return res.status(404).send({ message: "User was not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "error",
    });
  }
};

exports.getData = async (req, res) => {
  const user = await UserModel.User.find();
  res.send(user);
};
exports.getRegisterData = async (req, res) => {
  const user = await UserModel.User.findOne({ _id: req.params.id });
  res.send(user);
};

exports.addUser = async (req, res) => {
  try {
    const user = await UserModel.User.findOne({ _id: req.params.id });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const { user_name, user_email, roll } = req.body;

    if (!user_name || !user_email || !roll) {
      return res
        .status(400)
        .send({ message: "user_name, user_email, and roll are required" });
    }

    // Check if user_creation is an array, if not, initialize it as an empty array
    if (!Array.isArray(user.user_creation)) {
      user.user_creation = [];
    }

    // Push a new object into the user_creation array
    user.user_creation.push({
      users: {
        user_name,
        user_email,
        roll,
      },
      password: {
        user_name,
        user_email,
        roll,
      },
      localization: null,
      notification: null,
      advanced: null,
    });

    const record = await user.save();

    res.status(201).send(record);
  } catch (error) {
    console.error(error); // Log the error to the console

    // Provide a more detailed error message in the response
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please fill in all the details" });
    }

    let user = await UserModel.User.findOne({ email }).maxTimeMS(20000);

    if (user) {
      let validPassword = await bcrypt.compare(password, user.password);

      if (validPassword) {
        return res.status(200).send({
          user,
          message: "Login was successful",
        });
      } else {
        return res.status(401).send({ message: "Invalid password" });
      }
    } else {
      return res.status(404).send({ message: "user not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: "An error occurred",
    });
  }
};


exports.forgotPassword = async (req, res) => {
  console.log(req.body);

  const { email } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ status: 400, message: "Please provide your email" });
  }

  try {
    const userFind = await UserModel.User.findOne({ email: email });

    if (!userFind) {
      return res.status(404).json({ status: 404, message: "User not found" });
    }

    // Generate a token for password reset
    const token = jwt.sign({ _id: userFind._id }, keysecret, {
      expiresIn: "120s",
    });

    // Update the user document with the generated token
    const setUserToken = await UserModel.User.findByIdAndUpdate(
      { _id: userFind._id },
      { verifytoken: token },
      { new: true }
    );

    if (!setUserToken) {
      return res
        .status(500)
        .json({ status: 500, message: "Failed to update user token" });
    }

    // Compose the email message
    // const mailOptions = {
    //   from: "patientenverfuegung@test.computerbutler.de",
    //   to: email,
    //   subject: "Password Reset",
    //   html: `Click on the following link to reset your password: <a href="http://localhost:3000/forgotpassword/${userFind.id}/${setUserToken.verifytoken}">Reset Password</a>`,
    // };

    // Send the email

    let mailcontent = `Click on the following link to reset your password: <a href="http://localhost:3000/forgotpassword/${userFind.id}/${setUserToken.verifytoken}">Reset Password</a>`;

    mailer.mailerFromTo(email, process.env.NO_REPLY, 'Password Reset', mailcontent, '', function (error, resp) {
      if (error) {
        console.error("Error sending email", error);
        return res.status(500).json({ status: 500, message: "Email not sent" });
      } else {
        console.log("Email sent successfully", info.response);
        return res
          .status(200)
          .json({ status: 200, message: "Email sent successfully" });
      }
    });
  
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ status: 500, message: "Internal Server Error" });
  }
};
exports.forgotPasswordVerification = async (req, res) => {
  const { id, token } = req.params;

  try {
    const validuser = await UserModel.User.findOne({
      _id: id,
      verifytoken: token,
    });

    const verifyToken = jwt.verify(token, keysecret);

    console.log(verifyToken);

    if (validuser && verifyToken._id) {
      res.status(201).json({ status: 201, validuser });
    } else {
      res.status(401).json({ status: 401, message: "user not exist" });
    }
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
};

exports.changePassword = async (req, res) => {
  const { id, token } = req.params;

  const { password } = req.body;

  try {
    const validuser = await UserModel.User.findOne({ _id: id, verifytoken: token });

    const verifyToken = jwt.verify(token, keysecret);

    if (validuser && verifyToken._id) {
      const newpassword = await bcrypt.hash(password, 12);

      const setnewuserpass = await UserModel.User.findByIdAndUpdate(
        { _id: id },
        { password: newpassword }
      );

      setnewuserpass.save();
      res.status(201).json({ status: 200, setnewuserpass });
    } else {
      res.status(401).json({ status: 401, message: "user not exist" });
    }
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
};
