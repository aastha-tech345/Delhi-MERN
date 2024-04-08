const ContactInfomation = require("../models/contact.model");
const ApiFeatures = require("../utils/apiFeatures");
// const CustomerModel = require('../models/customer.model');

exports.createContact = async (req, res) => {
  try {
    const { email } = req.body;

    const emailFind = await ContactInfomation.Contact.findOne({ email });
    if (emailFind) {
      return res.status(406).json({
        message: "Email Already Exists",
        success: false,
      });
    }
    // const contact = new ContactInfomation.Contact({
    //   fname,
    //   lname,
    //   email,
    //   phone,
    //   gender,
    //   customer_id,
    //   added_by,
    //   id,

    // });
    // const result = await contact.save();

    const result = await ContactInfomation.Contact.create(req.body);

    return res.status(201).json({
      status: 201,
      message: "contact was created",
      result,
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while creating contact" });
  }
};

exports.getContact = async (req, res) => {
  try {
    const resultPerPage = req.query.resultPerPage || 10;

    const countPage = await ContactInfomation.Contact.countDocuments({
      is_deleted: { $ne: "deleted" },
    });
    let pageCount = Math.ceil(countPage / resultPerPage);

    const apiFeatures = new ApiFeatures(
      ContactInfomation.Contact.find({
        customer_id: req.params.id,
        is_deleted: { $ne: "deleted" },
      }),
      req.query
    )
      .reverse()
      .pagination(resultPerPage);

    const result = await apiFeatures.query;

    if (result?.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    if (apiFeatures.getCurrentPage() > pageCount) {
      apiFeatures.setCurrentPage(pageCount);
      const updatedResult = await apiFeatures.pagination(resultPerPage).query;
      return res.status(200).json({
        success: true,
        result: updatedResult,
        pageCount: pageCount,
      });
    }

    return res.status(200).json({
      success: true,
      result: result,
      pageCount: pageCount,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Server Error" });
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
    const searchKey = req.params.searchKey;
    const result = await ContactInfomation.Contact.find({
      $or: [
        { fname: { $regex: searchKey, $options: "i" } },
        { lname: { $regex: searchKey, $options: "i" } },
        { email: { $regex: searchKey, $options: "i" } },
        { phone: { $regex: searchKey, $options: "i" } },
        { statu: { $regex: searchKey, $options: "i" } },
        { id: { $regex: searchKey, $options: "i" } },
      ],
    });
    return res.send(result);
  } catch (error) {
    console.error("Error searching data:", error.message);
    res.status(500).send({ error: "Server Error" });
  }
};
