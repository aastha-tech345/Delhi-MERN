const AttorneyInformation = require("../models/attorney.model");
const CustomerModel = require("../models/customer.model");

exports.createAttorney = async (req, res) => {
  try {
    const { healthcare, power, provision, securing, added_by } = req.body;

    // Find the customer with the specified conditions
    const user = await CustomerModel.Customer.findOne({ created_by: "customer" });

    if (!user) {
      return res.status(400).json({ message: "No customer found to link as parent" });
    }

    // Create a new Attorney instance
    const attorney = new AttorneyInformation.Attorney({
      healthcare,
      power,
      provision,
      securing,
      added_by,
      customer_id: user._id,
      created_by: "customer", // Assuming you want to set created_by to "customer"
    });

    // Save the attorney record to the database
    const result = await attorney.save();

    res.status(201).json({
      message: "Attorney was created",
      result,
    });
  } catch (error) {
    console.error("Error creating attorney:", error);
    res.status(500).json({ error: "An error occurred while creating attorney" });
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
  try {
    const result = await AttorneyInformation.Attorney.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send(result);
  } catch (error) {
    console.error("Error updating attorney data:", error);
    res.status(500).send("Internal Server Error");
  }
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