const AttorneyInformation = require("../models/attorney.model");
const CustomerModel = require("../models/customer.model");

exports.createAttorney = async (req, res) => {
  try {
    const { healthcare, power, provision, securing, customer_id, added_by } =
      req.body;

    const user = await CustomerModel.Customer.findOne({
      created_by: "customer",
    });
    if (!user) {
      return res
        .status(400)
        .send({ message: "No customer found to link as parent" });
    }
    const attorney = new AttorneyInformation.Attorney({
        healthcare,
        power,
        provision,
        securing,
        customer_id,
        added_by,
      customer_id: user._id,
    });

    const result = await attorney.save();
    res.status(201).json({
      message: "attorney was created",
      result,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating attorney" });
  }
};

exports.getAttorney = async (req, res) => {
  const result = await AttorneyInformation.Attorney.find();
  res.send(result);
};

exports.getAttorneyData = async (req, res) => {
  const result = await AttorneyInformation.Attorney.findOne({
    _id: req.params.id,
  });
  res.send(result);
};

exports.getAttorneyDataUpdate = async (req, res) => {
  const result = await AttorneyInformation.Attorney.UpdateOne({
    _id: req.params.id,
  },{$set:req.body});
  res.send(result);
};

exports.getAttorneyDataDelete = async (req, res) => {
  const result = await AttorneyInformation.Attorney.deleteOne({
    _id: req.params.id,
  });
  res.send(result);
};

exports.getAttorneySearch = async(req,res)=>{
  const result = await AttorneyInformation.Attorney.find({
    "$or":[
      {administration:{$regex:req.params.key}}
    ]
  })
  res.send(result)
}