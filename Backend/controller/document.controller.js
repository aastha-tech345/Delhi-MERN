const DocumentInfo = require("../models/document.model");
const CustomerModel = require("../models/customer.model");
const ApiFeatures = require("../utils/apiFeatures");
exports.createDocument = async (req, res) => {
  // console.log("ashish", req);/
  try {
    const result = await DocumentInfo.Document.create({
      ...req.body,
      document_upload: req?.files,
    });

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
    const resultPerPage = req.query.resultPerPage || 10;

    const countPage = await DocumentInfo.Document.countDocuments({
      is_deleted: { $ne: "deleted" },
    });
    let pageCount = Math.ceil(countPage / resultPerPage);

    const apiFeatures = new ApiFeatures(
      DocumentInfo.Document.find({
        // customer_id: req.params.id,
        is_deleted: { $ne: "deleted" },
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
    const x = await DocumentInfo.Document.findById(req.params.id);
    let arr = x.document_upload;
    arr.push(...req.files);
    let removaArr = JSON.parse(req.body.removedFile);

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < removaArr?.length; j++) {
        if (arr[i]?.filename == removaArr[j]?.filename) {
          let x = arr.splice(i, 1);
          // console.log(x, "deletig");
        }
      }
    }
    // console.log("ar-------", arr);
    const result = await DocumentInfo.Document.findByIdAndUpdate(
      req.params.id,
      { ...req.body, document_upload: arr },
      {
        new: true,
      }
    );
    res.send(result);
  } catch (error) {
    console.log("Error from here", error);
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
