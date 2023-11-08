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
    } = req.body;

    const user = await CustomerModel.Customer.findOne({ created_by: "customer" });
    if (!user) {
      return res
        .status(400)
        .send({ message: "No customer found to link as parent" });
    }
    const contact = new ContactInfomation.Contact({
      fname,
      lname,
      email,
      phone,
      gender,
      added_by:null,
      customer_id: user._id,
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
