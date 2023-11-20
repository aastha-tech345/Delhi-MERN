const roleModel = require('../models/role.model');

exports.roleCreation = async (req, res) => {
  try {
    const { added_by, role_name, permission } = req.body;
    const roleInstance = new roleModel.Role({ added_by, role_name, permission }); // Use req.body here
    const result = await roleInstance.save();
    res.status(201).json({
      message: 'Role was created',
      result
    });
  } catch (error) {
    // Handle the error
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ error: 'An error occurred while creating the role' });
  }
};

exports.getRole = async (req, res) => {
  try {
    const result = await roleModel.Role.find();
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

exports.getRoleData = async (req, res) => {
  try {
    const result = await roleModel.Role.findOne({ _id: req.params.id });
    if (!result) {
      return res.status(404).send({ error: 'Role not found' });
    }
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

exports.getRoleDataUpdate = async (req, res) => {
  try {
    const result = await roleModel.Role.updateOne({ _id: req.params.id }, { $set: req.body });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

exports.getRoleDataDelete = async (req, res) => {
  try {
    const result = await roleModel.Role.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};
