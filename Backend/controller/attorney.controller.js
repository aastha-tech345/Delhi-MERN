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

exports.getActivityData = async (req, res) => {
  const result = await ActivityInfomation.Activity.findOne({
    _id: req.params.id,
  });
  res.send(result);
};
