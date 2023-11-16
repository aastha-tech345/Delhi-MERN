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

exports.getDocument = async(req,res)=>{
  const result = await DocumentInfo.Document.find()
  res.send(result)
}

exports.getDocumentData = async(req,res)=>{
  const result = await DocumentInfo.Document.findOne({_id:req.params.id})
  res.send(result)
}

exports.getDocumentDataUpdate = async(req,res)=>{
  const result = await DocumentInfo.Document.updateOne({_id:req.params.id},{$set:req.body})
  res.send(result)
}

exports.getDocumentDataDelete = async(req,res)=>{
  const result = await DocumentInfo.Document.deleteOne({_id:req.params.id})
  res.send(result)
}

exports.getDocumentSearch = async(req,res)=>{
  const result = await DocumentInfo.Document.find({
    "$or":[
      {fname:{$regex:req.params.key}}
    ]
  })
  res.send(result)
}
