const UserModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
// const nodemailer = require("nodemailer");
const mailer = require("../mailer/mailer");
const jwt = require("jsonwebtoken");
const keysecret = "asbndjhdjdkflfdghgj";
const Email = require("../models/email.model");
const ApiFeatures = require("../utils/apiFeatures");

exports.register = async (req, res) => {
  try {
    const {
      username,
      password,
      email,
      user_type,
      mobile,
      gender,
      location,
      tel,
      timeZone,
      street,
      plz,
      city,
      fname,
      lname,
      profileImage,
      parent_id,
      role,
      isAdminFullRights,
    } = req.body;

    let userData;

    const emailData = await UserModel.User.findOne({email})
    if(emailData){
      return res.status(409).json({success:false,message:"Email Id Already Exists"})
    }

    if (user_type === "admin") {
      userData = {
        username,
        password,
        email,
        profileImage,
        // user_role: "admin",
        // isAdminFullRights: true,
        // user_role: "admin",
        isAdminFullRights: "true",
        user_type: "admin",
      };
    } else if (user_type === "user") {
      const admin = await UserModel.User.findOne({ user_role: "admin" });

      if (admin) {
        userData = {
          username,
          password,
          email,
          gender,
          lname,
          profileImage,
          user_type: "user",
          mobile,
          parent_id: admin._id,
        };
      } else {
        return res
          .status(400)
          .send({ message: "No admin found to link as parent" });
      }
    } else if (user_type === "employee") {
      userData = {
        username,
        lname,
        password,
        mobile,
        email,
        location,
        tel,
        timeZone,
        street,
        plz,
        city,
        profileImage: null,
        user_type: "employee",
        role,
        parent_id,
        isAdminFullRights,
      };
      const userInstance = new UserModel.User(userData);
      const result = await userInstance.save();
      const myToken = await userInstance.getAuthToken();
      return res.status(201).send({
        status: 201,
        data: result,
        message: "Token was generated successfully",
        token: myToken,
      });
    } else {
      return res.status(400).send({ message: "Invalid user_type value" });
    }

    const userInstance = new UserModel.User(userData);
    const result = await userInstance.save();

    if (result) {
      const myToken = await userInstance.getAuthToken();
      const emailTemplate = await Email.EmailTemplate.findOne({
        findBy: "register",
        is_deleted: "active",
      });
      console.log(emailTemplate);
      if (emailTemplate) {
        let mailcontent = emailTemplate.content;
        mailcontent = mailcontent.replace("{username}", username);
        mailer.mailerFromTo(
          email,
          process.env.NO_REPLY,
          "Register Template",
          mailcontent,
          "",
          function (error, resp) {
            if (error) {
              console.error("Error sending email", error);
              return res
                .status(500)
                .json({ status: 500, message: "Email not sent" });
            } else {
              console.log("Email sent successfully", resp.response);

              if (myToken) {
                return res.status(201).send({
                  status: 201,
                  data: result,
                  message: "Token was generated successfully",
                  token: myToken,
                });
              } else {
                return res
                  .status(500)
                  .send({ message: "Token was not generated" });
              }
            }
          }
        );
      } else {
        return res.status(404).send({ message: "Email template not found" });
      }
    } else {
      return res.status(404).send({ message: "User was not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

// update Login User
exports.updateUser = async (req, res) => {
  try {
    const { password, ...updateData } = req.body;

    let userData = await UserModel.User.findById(req.params.id);

    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const user = await UserModel.User.findByIdAndUpdate(
      req.params.id,
      {
        ...updateData,
        profileImage: req?.file?.filename,
      },
      {
        new: true,
      }
    ).populate("role");

    if (user?.password == "") {
      user.password = await userData?.password;
      await user.save();
    }
    return res.status(200).json({
      success: true,
      message: "User Updated Successfully",
      user: user,
    });
  } catch (error) {
    console.log(error);
    // Handle the error and send an appropriate response
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// find user by id
exports.getUserById = async (req, res) => {
  try {
    const user = await UserModel.User.findById(req.params.id).populate("role");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User Find Successfully",
      user: user,
    });
  } catch (error) {
    console.log(error);
  }
};

// update Employee Details
exports.updateEmployeeDetails = async (req, res) => {
  try {
    const { password, ...updateData } = req.body;
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }
    const employee = await UserModel.User.findByIdAndUpdate(
      req.params.id,
      {
        ...updateData,
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Employee Updated Successfully",
      data: employee,
    });
  } catch (error) {
    console.log(error);
  }
};

// get Employee under the user
exports.getEmployeeData = async (req, res) => {
  try {
    // const usermployees = await UserModel.User.find({
    //   parent_id: req.params.id,
    // }).populate("role");
    // const usermployees = await UserModel.User.find({status: "active"}).populate("role");
    const resultPerPage = 2;
    const countPage = await UserModel.User.countDocuments({
      status: "active",
      user_type:"employee"
    });

    let pageCount = Math.ceil(countPage / resultPerPage);
    const apiFeatures = new ApiFeatures(
      UserModel.User.find({ status: "active", user_type: "employee" }).populate(
        "role"
      ),
      req.query
    )
      .reverse()
      .pagination(resultPerPage);

    const result = await apiFeatures.query;

    // let pageCount = Math.ceil(result?.length / resultPerPage);

    if (apiFeatures.getCurrentPage() > pageCount) {
      apiFeatures.setCurrentPage(pageCount);
      const updatedResult = await apiFeatures.pagination(resultPerPage).query;
      return res.status(200).json({
        success: true,
        data: updatedResult,
        pageCount: pageCount,
      });
    }

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User Employees Data Found",
      data: result,
      pageCount: pageCount,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getData = async (req, res) => {
  try {
    const users = await UserModel.User.find().populate("role");

    return res.status(200).json({
      status: 200,
      data: users,
      message: "Data Find Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.updateUserData = async (req, res) => {
  try {
    const result = await UserModel.User.findOneAndUpdate(
      { _id: req.params.id, status: { $ne: "deleted" } },
      { $set: req.body },
      { new: true }
    ).populate("role");

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "User Not Found or Already Deleted",
      });
    }

    res.status(200).json({
      success: true,
      message: "User Updated Successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.getRegisterData = async (req, res) => {
  const user = await UserModel.User.findOne({ _id: req.params.id });
  res.send(user);
};

exports.getUserDataDelete = async (req, res) => {
  try {
    const result = await UserModel.User.findOneAndUpdate(
      { _id: req.params.id, status: { $ne: "deleted" } },
      { $set: { status: "deleted" } },
      { new: true }
    ).populate("role");

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "User Not Found or Already Deleted",
      });
    }

    res.status(200).json({
      success: true,
      message: "User Deleted Successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
exports.getUserSearch = async (req, res) => {
  try {
    const searchKey = req.params.searchKey;
    const result = await UserModel.User.find({
      $or: [
        { username: { $regex: searchKey, $options: "i" } },
        { email: { $regex: searchKey, $options: "i" } },
      ],
    });
    return res.send(result);
  } catch (error) {
    console.error("Error searching data:", error.message);
    res.status(500).send({ error: "Server Error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.User.findOne({ email })
      .select("+password")
      .populate("role");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      return res.status(404).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User Login Successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.forgotPassword = async (req, res) => {
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
    const emailTemplate = await Email.EmailTemplate.findOne({
      findBy: "forgot",
      is_deleted: "active",
    });
    console.log("link", process.env.PRODUCTION_RESET_URL);
    if (emailTemplate) {
      let mailcontent = emailTemplate.content;
      // let mailcontent = `Click on the following link to reset your password: <a href="${process.env.PRODUCTION_RESET_URL}/forgotpassword">Reset Password</a>`;
      mailcontent = mailcontent.replace(
        "{link}",
        process.env.PRODUCTION_RESET_URL
      );
      mailer.mailerFromTo(
        email,
        process.env.NO_REPLY,
        "Forgot Password",
        mailcontent,
        "",
        function (error, resp) {
          if (error) {
            console.error("Error sending email", error);
            return res
              .status(500)
              .json({ status: 500, message: "Email not sent" });
          } else {
            console.log("Email sent successfully", resp.response);

            if (myToken) {
              return res.status(201).send({
                status: 201,
                data: result,
                message: "Token was generated successfully",
                token: myToken,
              });
            } else {
              return res
                .status(500)
                .send({ message: "Token was not generated" });
            }
          }
        }
      );
    } else {
      return res.status(404).send({ message: "Email template not found" });
    }
    // let mailcontent = `Click on the following link to reset your password: <a href="${process.env.PRODUCTION_RESET_URL}/forgotpassword">Reset Password</a>`;

    // mailer.mailerFromTo(
    //   email,
    //   process.env.NO_REPLY,
    //   "Password Reset",
    //   mailcontent,
    //   "",
    //   function (error, resp) {
    //     if (error) {
    //       console.error("Error sending email", error);
    //       return res
    //         .status(500)
    //         .json({ status: 500, message: "Email not sent" });
    //     } else {
    //       console.log("Email sent successfully", info.response);
    //     }
    //   }
    // );
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
      return res.status(404).json({
        message: "User not found. Please check the email address.",
      });
    }

    if (!password) {
      return res.status(400).json({
        message: "Please enter a password.",
      });
    }

    user.password = password;

    await user.save();
    return res.status(200).json({
      message: "Password changed successfully.",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while changing the password.",
    });
  }
};
