const EmailModel = require("../models/email.model");
const { UserModel } = require("../models/user.model");
const ApiFeatures = require("../utils/apiFeatures");

exports.createEmailTemplate = async (req, res) => {
  try {
    const { designation, content, customer_id, findBy } = req.body;
    const email = new EmailModel.EmailTemplate({
      designation,
      content,
      findBy,
      customer_id,
    });

    const result = await email.save();
    return res.status(201).json({
      status: 201,
      message: "EmailTemplate was created",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating EmailTemplate" });
  }
};

exports.getEmail = async (req, res) => {
  try {
    const resultPerPage = req.query.resultPerPage || 10;

    const countPage = await EmailModel.EmailTemplate.countDocuments({
      is_deleted: "active",
    });

    let pageCount = Math.ceil(countPage / resultPerPage);

    const apiFeatures = new ApiFeatures(
      EmailModel.EmailTemplate.find({ is_deleted: "active" }),
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

exports.getEmailData = async (req, res) => {
  try {
    const result = await EmailModel.EmailTemplate.findOne({
      _id: req.params.id,
      is_deleted: { $ne: "deleted" },
    });
    res.send(result);
  } catch (error) {
    console.error("Error fetching contact data:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getEmailDataDelete = async (req, res) => {
  try {
    const result = await EmailModel.EmailTemplate.updateOne(
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

exports.getEmailDataUpdate = async (req, res) => {
  try {
    const result = await EmailModel.EmailTemplate.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send(result);
  } catch (error) {
    console.error("Error updating contact data:", error);
    res.status(500).send("Internal Server Error");
  }
};
