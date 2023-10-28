const roleModel = require('../models/role.model');

exports.roleCreation = async (req, res) => {
  try {
    const role = new roleModel.Role(req.body);
    const result = await role.save();
    res.status(201).json({
      message: 'Role was created',
      result
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the role' });
  }
}
