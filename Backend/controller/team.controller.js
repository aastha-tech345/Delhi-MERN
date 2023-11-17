const teamModel = require('../models/team.model');
const UserModel = require("../models/user.model");


exports.teamCreation = async (req, res) => {
  try {
    const {
      team_name,
      team_members,
      team_manager,
      description,
      created_by,
      parent_id
    } = req.body;

    const employee = await UserModel.User.findOne({ role: 'employee' });
    if (employee) {
      defaultValues = {
        created_by: null,
        parent_id: employee._id,
      };
    } else {
      return res.status(400).send({ message: "No employee found to link as parent" });
    }
    let userData = {
      team_name,
      team_members,
      team_manager,
      description,
      ...defaultValues,
    };
    const userInstance = new teamModel.Teams(userData);
    const result = await userInstance.save();

    return res.status(200).send({ message: 'Customer created successfully', data: result });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server Error' });
  }
};