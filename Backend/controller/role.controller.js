const roleModel = require("../models/role.model");
const ApiFeatures = require("../utils/apiFeatures");

exports.roleCreation = async (req, res) => {
  try {
    const { added_by, role_name, permission } = req.body;
    const roleInstance = new roleModel.Role({
      added_by,
      role_name,
      permission,
    }); // Use req.body here
    const result = await roleInstance.save();
    return res.status(201).json({
      status: 201,
      message: "Role was created",
      result,
    });
  } catch (error) {
    // Handle the error
    console.error(error); // Log the error for debugging purposes
    res
      .status(500)
      .json({ error: "An error occurred while creating the role" });
  }
};

exports.getRole = async (req, res) => {
  try {
    const resultPerPage = 2;
    const countPage = await roleModel.Role.countDocuments();
    // const result = await roleModel.Role.find();
    let pageCount = Math.ceil(countPage / resultPerPage);
    const apiFeatures = new ApiFeatures(
      roleModel.Role.find({}),
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
    return res.status(200).json({
      success: true,
      message: "User Roles Data Found",
      data: result,
      pageCount: pageCount,
    });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getRoles=async(req,res)=>{
  try {
    const result = await roleModel.Role.find({});

    if(!result){
      return res.status(404).json({
        success: false,
        message: "User Roles Data Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User Roles Data Found",
      data: result,
    });
  } catch (error) {
    console.log(error)
  }
}

exports.getRoleData = async (req, res) => {
  try {
    const result = await roleModel.Role.findOne({ _id: req.params.id });
    if (!result) {
      return res.status(404).send({ error: "Role not found" });
    }
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getRoleDataUpdate = async (req, res) => {
  try {
    // const result = await roleModel.Role.updateOne(
    //   { _id: req.params.id },
    //   { $set: req.body }
    // );
    // res.send(result);

    const result = await roleModel.Role.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    return res.status(200).json({
      success:true,
      message:"Role Updated Successfully"
    })
  } catch (error) {
   return res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getRoleDataDelete = async (req, res) => {
  try {
    const result = await roleModel.Role.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
