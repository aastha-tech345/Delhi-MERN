const DocumentInfo = require("../models/document.model");
const  CustomerModel  = require("../models/customer.model");

exports.createDocument = async (req, res) => {
  try {
    const { document_title, document_type, document_upload } = req.body;

    const user = await CustomerModel.Customer.findOne({ created_by: "customer" });
    if (!user) {
      return res
        .status(400)
        .send({ message: "No customer found to link as parent" });
    }
    const document = new DocumentInfo.Document({
        document_title, document_type, document_upload,
      added_by: null,
      customer_id: user._id,
    });

    const result = await document.save();
    res.status(201).json({
      message: "document was created",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating document" });
  }
};
