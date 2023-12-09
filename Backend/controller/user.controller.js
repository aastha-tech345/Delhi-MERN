const UserModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
// const nodemailer = require("nodemailer");
const mailer = require("../mailer/mailer");
const jwt = require("jsonwebtoken");
const keysecret = "asbndjhdjdkflfdghgj";

exports.register = async (req, res) => {
  try {
<<<<<<< HEAD
    const {
      username,
      password,
      email,
      role,
      lname,
      mobile,
      gender,
      employee_password,
      employee_id,
      employee_email,
      employee_location,
      employee_mobile,
      employee_tel,
      employee_timeZone,
      employee_street,
      employee_plz,
      employee_city,
      employee_fname,
      employee_lname,
      user_id,
    } = req.body;
=======
    const { username, password, email, role, employee_creation } = req.body;
>>>>>>> 8e56815e20b1887101f44c5659e633f2f93feea2

    let userData;

    if (role === "admin") {
      userData = {
        username,
        password,
        email,
        role: "admin",
      };
    } else if (role === "user") {
      const admin = await UserModel.User.findOne({ role: "admin" });

      if (admin) {
        userData = {
          username,
          password,
          email,
          gender,
          lname,
          role,
          mobile,
          added_by: null,
          parent_id: admin._id,
        };
      } else {
        return res
          .status(400)
          .send({ message: "No admin found to link as parent" });
      }
    } else if (role === "employee") {
      const user = await UserModel.User.findOne({ role: "user" });

      if (user) {
        userData = {
          employee_id,
          username: employee_fname,
          password: employee_password,
          email: employee_email,
          employee_lname,
          employee_location,
          employee_mobile,
          employee_tel,
          employee_timeZone,
          employee_street,
          employee_plz,
          employee_city,
          role,
          added_by: null,
          user_id,
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
          status: 201,
          data: result,
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
      message: "Internal Server Error",
    });
  }
};

exports.getData = async (req, res) => {
  try {
<<<<<<< HEAD
    // const role = req.body.role;
    // let query = {};
    // if (role === "user") {
    //   query = { role: "user" };
    // } else if (role === "employee") {
    //   query = { role: "employee" };
    // } else if (role === "admin") {
    //   query = { role: "admin" };
    // }
=======
    const users = await UserModel.User.find().populate(
      "employee_creation.users.role"
    );
>>>>>>> 8e56815e20b1887101f44c5659e633f2f93feea2

    // const users = await UserModel.User.find(query);
    const users = await UserModel.User.find();
    res.status(200).json({
      status: 200,
      data: users,
      message: "Data Find Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getRegisterData = async (req, res) => {
  const user = await UserModel.User.findOne({ _id: req.params.id });
  res.send(user);
};

exports.getRegisterUpdate = async (req, res) => {
  const { password, ...otherFields } = req.body;
  if (password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    otherFields.password = hashedPassword;
  }

  try {
    const user = await UserModel.User.updateOne(
      { _id: req.params.id },
      { $set: otherFields }
    );
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.addUser = async (req, res) => {
  try {
    const existingUser = await UserModel.User.findById(req.params.id);

    existingUser.employee_creation = [
      ...existingUser.employee_creation,
      req.body,
    ];

    const updatedUser = await existingUser.save();

    return res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
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
  // console.log(req.body);

  const { email } = req.body;

  if (!email) {
    return res
      .status(400)
      .json({ status: 400, message: "Please provide your email" });
  }

  try {
    const userFind = await UserModel.User.findOne({ email });

    if (!userFind) {
      return res.status(404).json({ status: 404, message: "User not found" });
    }

    // Generate a token for password reset
    // const token = jwt.sign({ _id: userFind._id }, keysecret, {
    //   expiresIn: "120s",
    // });

    // // Update the user document with the generated token
    // const setUserToken = await UserModel.User.findByIdAndUpdate(
    //   { _id: userFind._id },
    //   { verifytoken: token },
    //   { new: true }
    // );

    // if (!setUserToken) {
    //   return res
    //     .status(500)
    //     .json({ status: 500, message: "Failed to update user token" });
    // }

    // Compose the email message
    // const mailOptions = {
    //   from: "patientenverfuegung@test.computerbutler.de",
    //   to: email,
    //   subject: "Password Reset",
    //   html: `Click on the following link to reset your password: <a href="http://localhost:3000/forgotpassword/${userFind.id}/${setUserToken.verifytoken}">Reset Password</a>`,
    // };

    // Send the email

    let mailcontent = `Click on the following link to reset your password: <a href="${process.env.PRODUCTION_RESET_URL}/forgotpassword">Reset Password</a>`;

    mailer.mailerFromTo(
      email,
      process.env.NO_REPLY,
      "Password Reset",
      mailcontent,
      "",
      function (error, resp) {
        if (error) {
          console.error("Error sending email", error);
          return res
            .status(500)
            .json({ status: 500, message: "Email not sent" });
        } else {
          console.log("Email sent successfully", info.response);
        }
      }
    );
    return res
      .status(200)
      .json({ status: 200, message: "Email sent successfully" });
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
  const { email, password } = req.body;

  try {
    let user = await UserModel.User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(500).json({
        message: "Somethig Went Wrong Please Try Again",
      });
    }

    if (!password) {
      return res.status(406).json({
        message: "Please Enter a Password",
      });
    }

    const newpassword = await bcrypt.hash(password, 12);
    user.password = newpassword;

    await user.save();
    return res.status(200).json({
      message: "password changed successfully",
    });
  } catch (error) {
    res.status(500).json({ status: 500, error });
  }
};
