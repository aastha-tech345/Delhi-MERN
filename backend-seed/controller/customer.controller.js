const  Customer  = require('../models/customer.model');
const UserModel = require("../models/user.model");

exports.createCustomer = async (req, res) => {
  try {
    const {
      fname,
      lname,
      phone,
      email,
      title,
      gender,
      primary_contact,
      contacts,
      tasks,
      created_by,
      customer_id
    } = req.body;

    const employee = await UserModel.User.findOne({ role: 'employee' });
    if (employee) {
      defaultValues = {
        contacts: {
          fname:null,
          lname:null,
          gender:null,
          email:null,
          phone: null,
          skype: null,
          customer_id: null,
        },
        tasks: {
          title: null,
          start_date: null,
          deadline:null,
          assigned_to: null,
          employees: null,
          task_status: null,
          customer_id: null,
        },
        created_by: null,
        parent_id: employee._id,
      };
    } else {
      return res.status(400).send({ message: "No employee found to link as parent" });
    }
    let userData = {
      fname,
      lname,
      phone,
      email,
      title,
      gender,
      primary_contact,
      ...defaultValues,
    };

    const userInstance = new Customer.Customer(userData);
    const result = await userInstance.save();

    return res.status(200).send({ message: 'Customer created successfully', data: result });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Server Error' });
  }
};
