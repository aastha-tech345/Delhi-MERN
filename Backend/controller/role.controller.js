const { Parser } = require("json2csv");
const roleModel = require("../models/role.model");
const ApiFeatures = require("../utils/apiFeatures");
const path = require("path");
const fs = require("fs");
const catchAsync = require("../utils/errorHandling");
exports.roleCreation = catchAsync(async (req, res) => {
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
});
exports.getRole = catchAsync(async (req, res) => {
  try {
    const resultPerPage = req.query.resultPerPage || 10;
    const countPage = await roleModel.Role.countDocuments();
    // const result = await roleModel.Role.find();
    let pageCount = Math.ceil(countPage / resultPerPage);
    const apiFeatures = new ApiFeatures(roleModel.Role.find({}), req.query)
      .reverse()
      .pagination(resultPerPage);

    const result = await apiFeatures.query;

    if (result?.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

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
});

exports.getRoles = catchAsync(async (req, res) => {
  try {
    const result = await roleModel.Role.find({});

    if (!result) {
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
    console.log(error);
  }
});

exports.getRoleData = catchAsync(async (req, res) => {
  try {
    const result = await roleModel.Role.findOne({ _id: req.params.id });
    if (!result) {
      return res.status(404).send({ error: "Role not found" });
    }
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

exports.getRoleDataUpdate = catchAsync(async (req, res) => {
  try {
    const result = await roleModel.Role.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json({
      success: true,
      message: "Role Updated Successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).send({ error: "Internal Server Error" });
  }
});

exports.getRoleDataDelete = catchAsync(async (req, res) => {
  try {
    const result = await roleModel.Role.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

exports.exportRolesToCSV = catchAsync(async (req, res) => {
  try {
    const roleData = await roleModel.Role.findOne({ _id: req.params.id });
    if (!roleData) {
      return res.status(404).send({ error: "Role not found" });
    }

    const flattenedData = roleData.permission.map((perm) => ({
      _id: roleData._id,
      role_name: roleData.role_name,
      added_by: roleData.added_by,
      createdAt: roleData.createdAt,
      updatedAt: roleData.updatedAt,
      permission_id: perm._id, // Adding permission _id explicitly
      p_show: perm.p_show,
      p_edit: perm.p_edit,
      p_export: perm.p_export,
      p_delete: perm.p_delete,
      ownership_check: perm.ownership_check,
      section_name: perm.section_name,
    }));

    // Fields to include in the CSV
    const fields = [
      "_id",
      "role_name",
      "added_by",
      "createdAt",
      "updatedAt",
      "p_show",
      "p_edit",
      "p_export",
      "p_delete",
      "ownership_check",
      "section_name",
    ];

    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(flattenedData);

    const utf8BOM = "\uFEFF";
    const csvWithBOM = utf8BOM + csv;

    const dirPath = path.join(__dirname, "..", "public", "csv");
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    const exportFileName = `Export_Template_${Date.now()}.csv`;
    const exportFilePath = path.join(dirPath, exportFileName);

    console.log("Writing file to:", exportFilePath);
    await fs.promises.writeFile(exportFilePath, csvWithBOM, "utf8");
    console.log("File written successfully.");

    res.download(exportFilePath, (err) => {
      if (err) {
        console.error("Error during download:", err);
        res.status(500).send("Error generating the CSV file.");
      } else {
        console.log("Download successful.");
        // // Delete the file after download is successful
        // fs.unlink(exportFilePath, (unlinkErr) => {
        //   if (unlinkErr) {
        //     console.error("Error deleting file:", unlinkErr);
        //   } else {
        //     console.log("File deleted successfully.");
        //   }
        // });
      }
    });
  } catch (error) {
    console.error("Error exporting roles to CSV:", error);
    res.status(500).send({ error: "Failed to export roles to CSV" });
  }
});
