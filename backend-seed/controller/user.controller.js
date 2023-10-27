
const UserModel = require("../models/user.model");
const bcrypt = require("bcryptjs");


exports.register = async (req, res) => {
  try {
    const {
      username,
      password,
      email,
      role,
      role_id,
    } = req.body;

    let defaultValues = {};

    if (role === 'employee') {
      defaultValues = {
        role_id: null
      };
    } else if (role === 'customer') {
      // Find an employee and get their _id
      const employee = await UserModel.User.findOne({ role: 'employee' });
      if (employee) {
        defaultValues = {
          role_id: null,
          parent_id: employee._id,
        };
      } else {
        return res.status(400).send({ message: "No employee found to link as parent" });
      }
    }

    let userData = {
      username,
      password,
      email,
      role,
      ...defaultValues,
    };

    let userInstance = new UserModel.User(userData);
    let result = await userInstance.save();
    result = result.toObject();

    if (result) {
      let myToken = await userInstance.getAuthToken();

      if (myToken) {
        return res.send({
          result,
          message: "Token was generated successfully",
          token: myToken,
        });
      } else {
        return res.send({ message: "Token was not generated" });
      }
    } else {
      return res.status(404).send({ message: "User was not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      message: 'Server Error',
    });
  }
};



  exports.login = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      if (!username || !password) {
        return res.status(400).send({ message: "Please fill in all the details" });
      }
  
      let user = await UserModel.User.findOne({ username });
  
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
        message: 'An error occurred',
      });
    }
  };