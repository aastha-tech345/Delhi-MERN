const teamModel = require("../models/team.model");
const UserModel = require("../models/user.model");

exports.teamCreation = async (req, res) => {
  try {
    const { team_name, team_members, team_manager, description } = req.body;

    const userData = {
      team_name,
      team_members,
      team_manager,
      description,
    };

    const userInstance = new teamModel.Teams(userData);
    const result = await userInstance.save();

    return res
      .status(200)
      .send({ message: "Team created successfully", data: result });
  } catch (error) {
    console.error("Error creating team:", error.message);
    return res.status(500).send({ message: "Server Error" });
  }
};

exports.getActivity = async (req, res) => {
  try {
    const user = await teamModel.Teams.findById(req.params.id)
      .populate("role")
    // console.log("user", user);
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
