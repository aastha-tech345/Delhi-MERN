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


exports.getContact = async (req, res) => {
  const result = await ContactInfomation.Contact.find();
  res.send(result);
};

exports.getContactData = async (req, res) => {
  const result = await ContactInfomation.Contact.findOne({_id:req.params.body});
  res.send(result);
};

exports.getContactDataUpdate = async (req, res) => {
  const result = await ContactInfomation.Contact.updateOne({_id:req.params.body},{$set:req.body});
  res.send(result);
};

exports.getContactDataDelate = async (req, res) => {
  const result = await ContactInfomation.Contact.deleteOne({_id:req.params.body});
  res.send(result);
}

exports.getContactSearch = async(req,res)=>{
  const result = await ContactInfomation.Contact.find({
    "$or":[
      {fname:{$regex:req.params.key}},
      {lname:{$regex:req.params.key}}
    ]
  })
  res.send(result)
}
