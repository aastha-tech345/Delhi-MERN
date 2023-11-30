const DocumentInfo = require("../models/document.model");
const CustomerModel = require("../models/customer.model");
exports.createDocument = async (req, res) => {
  try {
    const document = new DocumentInfo.Document({
      ...req.body,
      document_upload: req?.file?.filename,
    });
    console.log("ashishhh", document);

    const result = await document.save();
    res.status(201).json({
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
    const result = await DocumentInfo.Document.find();
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getDocumentData = async (req, res) => {
  try {
    const result = await DocumentInfo.Document.findOne({ _id: req.params.id });
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
    // const result = await DocumentInfo.Document.updateOne(
    //   { _id: req.params.id },
    //   { $set: req.body }
    // );

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
    const result = await DocumentInfo.Document.findByIdAndUpdate(
      req.params.id,
      { status: "deleted" },
      {
        new: true,
      }
    );
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
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
