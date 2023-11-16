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

exports.getRole = async(req,res)=>{
  const result = await roleModel.Role.find()
  res.send(result)
}

exports.getRoleData = async(req,res)=>{
  const result = await roleModel.Role.findOne({_id:req.params.id})
  res.send(result)
}

exports.getRoleDataUpdate = async(req,res)=>{
  const result = await roleModel.Role.updateOne({_id:req.params.id},{$set:req.body})
  res.send(result)
}

exports.getRoleDataDelete = async(req,res)=>{
  const result = await roleModel.Role.deleteOne({_id:req.params.id})
  res.send(result)
}