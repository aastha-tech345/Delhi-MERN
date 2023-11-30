const ContactInfomation = require("../models/contact.model");
const ApiFeatures = require("../utils/apiFeatures");
// const CustomerModel = require('../models/customer.model');

exports.createContact = async (req, res) => {
  try {
    const { fname, lname, email, phone, gender, customer_id } = req.body;

    const emailFind = await ContactInfomation.Contact.findOne({ email });
    if (emailFind) {
      return res.status(406).json({
        message: "Email Already Exists",
        success: false,
      });
    }
    const contact = new ContactInfomation.Contact({
      fname,
      lname,
      email,
      phone,
      gender,
      customer_id,
    });

    const result = await contact.save();
    return res.status(201).json({
      message: "contact was created",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating contact" });
  }
};

exports.getContact = async (req, res) => {
  try {
    const resultPerPage = 10;
    const countPage = await ContactInfomation.Contact.countDocuments({
      status: "active",
    });
    let pageCount = Math.ceil(Number(countPage) / 10);
    const apiFeatures = new ApiFeatures(
      ContactInfomation.Contact.find(),
      req.query
    ).reverse().pagination(resultPerPage);

    const result = await apiFeatures.query;

    return res.status(200).json({
      success: true,
      result: result,
      pageCount: pageCount,
    });
  } catch (error) {
    console.error("Error fetching contact data:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getContactData = async (req, res) => {
  try {
    const result = await ContactInfomation.Contact.findOne({
      _id: req.params.id,
      status: { $ne: "deleted" },
    });
    res.send(result);
  } catch (error) {
    console.error("Error fetching contact data:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getContactDataUpdate = async (req, res) => {
  try {
    const result = await ContactInfomation.Contact.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send(result);
  } catch (error) {
    console.error("Error updating contact data:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getContactDataDelete = async (req, res) => {
  try {
    const result = await ContactInfomation.Contact.updateOne(
      { _id: req.params.id, status: { $ne: "deleted" } },
      { $set: { status: "deleted" } }
    );
    res.status(200).json({
      success: true,
      message: "Contact Deleted Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getContactSearch = async (req, res) => {
  try {
    const result = await ContactInfomation.CustomerContact.find({
      $or: [
        { fname: { $regex: req.params.key, $options: "i" } },
        { lname: { $regex: req.params.key, $options: "i" } },
      ],
    });
    res.send(result);
  } catch (error) {
    console.error("Error searching for contact info:", error);
    res.status(500).send("Internal Server Error");
  }
};
