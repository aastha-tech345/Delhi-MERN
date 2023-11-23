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
      customer_id,
    } = req.body;

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
      customer_id
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

exports.getSpv = async (req, res) => {
  try {
    const result = await SpvInfomation.SpvInfo.find();
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

exports.getSpvData = async (req, res) => {
  try {
    const result = await SpvInfomation.SpvInfo.findOne({ _id: req.params.id });
    if (!result) {
      return res.status(404).send({ error: 'SPV information not found' });
    }
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

exports.getSpvDataUpdate = async (req, res) => {
  try {
    const result = await SpvInfomation.SpvInfo.updateOne({ _id: req.params.id }, { $set: req.body });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

exports.getSpvDataDelete = async (req, res) => {
  try {
    const result = await SpvInfomation.SpvInfo.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

exports.getSpvSearch = async (req, res) => {
  try {
    const result = await SpvInfomation.SpvInfo.find({
      "$or": [
        { fname: { $regex: req.params.key } }
      ]
    });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: 'Internal Server Error' });
  }
};
