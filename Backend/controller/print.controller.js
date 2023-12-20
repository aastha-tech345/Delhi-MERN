const PrintInfomation = require("../models/print.model");
const { UserModel } = require("../models/user.model");
const ApiFeatures = require("../utils/apiFeatures");

exports.createPrintTemplate = async (req, res) => {
  try {
    const { designation, content, customer_id } = req.body;
    const print = new PrintInfomation.printTemplate({
      designation,
      content,
      customer_id,
    });

    const result = await print.save();
    return res.status(201).json({
      status: 201,
      message: "printTemplate was created",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating printTemplate" });
  }
};

exports.getPrint = async (req, res) => {
  try {
    const resultPerPage = 10;

    const countPage = await PrintInfomation.printTemplate.countDocuments({
      is_deleted: "active",
    });

    let pageCount = Math.ceil(countPage / resultPerPage);

    const apiFeatures = new ApiFeatures(
      PrintInfomation.printTemplate.find({ is_deleted: "active" }),
      req.query
    )
      .reverse()
      .pagination(resultPerPage);

    const result = await apiFeatures.query;

    if (apiFeatures.getCurrentPage() > pageCount) {
      apiFeatures.setCurrentPage(pageCount);
      const updatedResult = await apiFeatures.pagination(resultPerPage).query;
      return res.status(200).json({
        success: true,
        result: updatedResult,
        pageCount: pageCount,
      });
    }

    return res.status(200).json({
      success: true,
      result: result,
      pageCount: pageCount,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Server Error" });
  }
};

exports.getPrintData = async (req, res) => {
  try {
    const result = await PrintInfomation.printTemplate.findOne({
      _id: req.params.id,
      is_deleted: { $ne: "deleted" },
    });
    res.send(result);
  } catch (error) {
    console.error("Error fetching contact data:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getPrintDataDelete = async (req, res) => {
  try {
    const result = await PrintInfomation.printTemplate.updateOne(
      { _id: req.params.id, is_deleted: { $ne: "deleted" } },
      { $set: { is_deleted: "deleted" } }
    );
    res.status(200).json({
      success: true,
      message: "Print Deleted Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getPrintDataUpdate = async (req, res) => {
  try {
    const result = await PrintInfomation.printTemplate.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send(result);
  } catch (error) {
    console.error("Error updating contact data:", error);
    res.status(500).send("Internal Server Error");
  }
};
