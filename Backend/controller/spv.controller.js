const SpvInfomation = require("../models/spv.model");
const CustomerModel = require("../models/customer.model");

exports.createSpv = async (req, res) => {
  try {
    console.log("dsgdsdfjdhkgjkdf", req.body);
    // const {
    //   motivation,
    //   resuscitation,
    //   situation,
    //   determination,
    //   whereabout,
    //   support,
    //   funeralwishes,
    //   atorney,
    //   fee,
    //   information,
    //   customer_id,
    // } = req.body;

    // const spv = new SpvInfomation.SpvInfo({
    //   motivation,
    //   resuscitation,
    //   situation,
    //   determination,
    //   whereabout,
    //   support,
    //   funeralwishes,
    //   atorney,
    //   fee,
    //   information,
    //   customer_id,
    // });

    const result = await SpvInfomation.SpvInfo.create(req.body);
    res.status(201).json({
      message: "spv was created",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating spv" });
  }
};

exports.getSpv = async (req, res) => {
  try {
    const result = await SpvInfomation.SpvInfo.find();
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getSpvData = async (req, res) => {
  try {
    const result = await SpvInfomation.SpvInfo.findOne({
      customer_id: req.params.id,
    });
    if (!result) {
      return res.status(404).send({ error: "SPV information not found" });
    }
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getSpvDataUpdate = async (req, res) => {
  try {
    const existingAttorney = await SpvInfomation.SpvInfo.findOne({
      customer_id: req.params.id,
    });

    let result;
    if (existingAttorney) {
      result = await SpvInfomation.SpvInfo.updateOne(
        { customer_id: req.params.id },
        { $set: req.body }
      );
    } else {
      result = await SpvInfomation.SpvInfo.create(req.body);
    }

    return res.status(201).json({
      status: 201,
      message: existingAttorney ? "Update successful" : "Created successfully",
      result,
    });
  } catch (error) {
    console.error("Error updating/creating attorney data:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getSpvDataDelete = async (req, res) => {
  try {
    const result = await SpvInfomation.SpvInfo.deleteOne({
      _id: req.params.id,
    });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getSpvSearch = async (req, res) => {
  try {
    const result = await SpvInfomation.SpvInfo.find({
      $or: [{ fname: { $regex: req.params.key } }],
    });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
