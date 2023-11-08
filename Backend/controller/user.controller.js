const UserModel = require("../models/user.model");
const bcrypt = require("bcryptjs");

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
          user_creation: [],
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

// exports.deleteUserCreation = async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const userNameToDelete = req.body.user_name;

//     const user = await UserModel.User.findOne({ _id: userId });

//     if (!user) {
//       return res.status(404).send({ message: "User not found" });
//     }
//     if (!Array.isArray(user.user_creation)) {
//       user.user_creation = [];
//     }
//     const indexToDelete = user.user_creation.findIndex(
//       (item) => item.users.user_name === userNameToDelete
//     );

//     if (indexToDelete === -1) {
//       return res.status(404).send({ message: "User creation object not found" });
//     }
//     user.user_creation.splice(indexToDelete, 1);

//     const record = await user.save();

//     res.status(200).send(record);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ message: "Internal Server Error", error: error.message });
//   }
// };

exports.getUserData = async (req, res) => {
  try {
    const user = await UserModel.User.findOne({ _id: req.params.id });

    // Check if the user object exists
    if (!user) {
      return res.status(404).send("User not found");
    }

    // Extract the 'user_creation' field from the user object
    const userCreationData = user.user_creation;

    // Send the 'user_creation' field in the response
    res.send(userCreationData);
  } catch (error) {
    // Handle errors appropriately
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// exports.deleteObjectById = (req, res) => {
//   const objectIdToDelete = req.params.id;
//   const indexToDelete = dataArray.findIndex(
//     (obj) => obj.users._id === objectIdToDelete
//   );
//   if (indexToDelete !== -1) {
//     const deletedObject = dataArray.splice(indexToDelete, 1);
//     res.json({ message: "Object deleted successfully", deletedObject });
//   } else {
//     res.status(404).json({ message: "Object not found" });
//   }
// };

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .send({ message: "Please fill in all the details" });
    }

    let user = await UserModel.User.findOne({ username }).maxTimeMS(20000);

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
