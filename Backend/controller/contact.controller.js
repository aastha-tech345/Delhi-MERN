const ContactInfomation = require('../models/contact.model');
const CustomerModel = require('../models/customer.model');

exports.createContact = async (req, res) => {
  try {

    const {
      fname,
      lname,
      email,
      phone,
      gender,
      customer_id
    } = req.body;

    // const user = await CustomerModel.Customer.findOne({ created_by: "customer" });
    // if (!user) {
    //   return res
    //     .status(400)
    //     .send({ message: "No customer found to link as parent" });
    // }
    const contact = new ContactInfomation.Contact({
      fname,
      lname,
      email,
      phone,
      gender,
      customer_id,
    });

    const result = await contact.save();
    res.status(201).json({
      message: 'contact was created',
      result,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'An error occurred while creating contact' });
  }
};


exports.getContact = async (req, res) => {
  try {
    const result = await ContactInfomation.Contact.find();
    res.send(result);
  } catch (error) {
    console.error("Error fetching contact data:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getContactData = async (req, res) => {
  try {
    const result = await ContactInfomation.Contact.findOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    console.error("Error fetching contact data:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getContactDataUpdate = async (req, res) => {
  try {
    const result = await ContactInfomation.Contact.updateOne({ _id: req.params.id }, { $set: req.body });
    res.send(result);
  } catch (error) {
    console.error("Error updating contact data:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getContactDataDelete = async (req, res) => {
  try {
    const result = await ContactInfomation.Contact.deleteOne({ _id: req.params.id });
    res.send(result);
  } catch (error) {
    console.error("Error deleting contact data:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getContactSearch = async (req, res) => {
  try {
    const result = await ContactInfomation.CustomerContact.find({
      "$or": [
        { fname: { $regex: req.params.key, $options: 'i' } },
        { lname: { $regex: req.params.key, $options: 'i' } }
      ]
    });
    res.send(result);
  } catch (error) {
    console.error("Error searching for contact info:", error);
    res.status(500).send("Internal Server Error");
  }
};