const DocumentInfo = require("../models/document.model");
const CustomerModel = require("../models/customer.model");
const ApiFeatures = require("../utils/apiFeatures");
exports.createDocument = async (req, res) => {
  try {
    const result = await DocumentInfo.Document.create({
      ...req.body,
      document_upload: req?.file?.filename,
    });

    // console.log("ashishhh", document);

    // const result = await document.save();
    return res.status(201).json({
      message: "document was created",
      result,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating document" });
  }
};
exports.getDocument = async (req, res) => {
  try {
    const resultPerPage = 10;

    const countPage = await DocumentInfo.Document.countDocuments({
      is_deleted: "active",
    });
    let pageCount = Math.ceil(countPage / resultPerPage);

    const apiFeatures = new ApiFeatures(
      DocumentInfo.Document.find({
        customer_id: req.params.id,
        is_deleted: "active",
      }),
      req.query
    )
      .reverse()
      .pagination(resultPerPage);

    const result = await apiFeatures.query;

    if (result?.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

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

exports.getDocumentData = async (req, res) => {
  try {
    const result = await DocumentInfo.Document.findOne({
      _id: req.params.id,
      is_deleted: { $ne: "deleted" },
    });
    if (!result) {
      return res.status(404).send({ error: "Document not found" });
    }
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getDocumentDataUpdate = async (req, res) => {
  try {
    const result = await DocumentInfo.Document.findByIdAndUpdate(
      req.params.id,
      { ...req.body, document_upload: req?.file?.filename },
      {
        new: true,
      }
    );
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getDocumentDataDelete = async (req, res) => {
  try {
    const result = await DocumentInfo.Document.updateOne(
      { _id: req.params.id, is_deleted: { $ne: "deleted" } },
      { $set: { is_deleted: "deleted" } }
    );

    if (result.nModified === 0) {
      return res.status(404).json({
        success: false,
        message: "Document Not Found or Already Deleted",
      });
    }

    res.status(200).json({
      success: true,
      message: "Document Deleted Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getDocumentSearch = async (req, res) => {
  try {
    const result = await DocumentInfo.Document.find({
      $or: [{ fname: { $regex: req.params.key } }],
    });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
