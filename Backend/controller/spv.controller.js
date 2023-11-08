const SpvInfomation = require("../models/spv.model");
const CustomerModel = require("../models/customer.model");

exports.createSpv = async (req, res) => {
  try {
    const {
      motivation,
      resuscitation,
      situation,
      determination,
      whereabout,
      support,
      funeralwishes,
      atorney,
      fee,
      information,
    } = req.body;

    const user = await CustomerModel.Customer.findOne({
      created_by: "customer",
    });
    if (!user) {
      return res
        .status(400)
        .send({ message: "No customer found to link as parent" });
    }
    const spv = new SpvInfomation.SpvInfo({
      motivation,
      resuscitation,
      situation,
      determination,
      whereabout,
      support,
      funeralwishes,
      atorney,
      fee,
      information,
      added_by: null,
      customer_id: user._id,
    });

    const result = await spv.save();
    res.status(201).json({
      message: "spv was created",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating spv" });
  }
};
