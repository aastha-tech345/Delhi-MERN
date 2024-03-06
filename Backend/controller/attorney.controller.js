const AttorneyInfo = require("../models/attorney.model");

exports.createAttorney = async (req, res) => {
  try {
    const {
      healthCare,
      powerOfAttorney,
      careProvision,
      securingattorney,
      customer_id,
    } = req.body;

    // Create a new Attorney instance
    const attorney = new AttorneyInfo.Attorney({
      healthCare,
      powerOfAttorney,
      careProvision,
      securingattorney,
      customer_id,
    });

    // Save the attorney record to the database
    const result = await attorney.save();

    res.status(201).json({
      status: 201,
      message: "Attorney was created",
      result,
    });
  } catch (error) {
    console.error("Error creating attorney:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating attorney" });
  }
};

exports.getAttorney = async (req, res) => {
  try {
    const result = await AttorneyInfo.Attorney.find();
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getAttorneyData = async (req, res) => {
  try {
    const result = await AttorneyInfo.Attorney.findOne({
      customer_id: req.params.id,
    });
    if (!result) {
      return res.status(404).send({ error: "Attorney not found" });
    }
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getAttorneyDataUpdate = async (req, res) => {
  try {
    const result = await AttorneyInfo.Attorney.updateOne(
      { customer_id: req.params.id },
      { $set: req.body }
    );
    return res.status(201).json({
      status: 201,
      message: "update successfully",
      result,
    });
  } catch (error) {
    console.error("Error updating attorney data:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getAttorneyDataDelete = async (req, res) => {
  try {
    const result = await AttorneyInfo.Attorney.deleteOne({
      _id: req.params.id,
    });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getAttorneySearch = async (req, res) => {
  try {
    const result = await AttorneyInfo.Attorney.find({
      $or: [{ administration: { $regex: req.params.key } }],
    });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
