const { Customer } = require("../models/customer.model");
const UserModel = require("../models/user.model");

exports.createCustomer = async (req, res) => {
  try {
    const {
      fname,
      lname,
      phone,
      email,
      plz,
      city,
      street,
      primary_contact, // Assuming this is defined somewhere
    } = req.body;

    // Find an employee to link as the parent
    const employee = await UserModel.User.findOne({ role: "employee" });
    if (!employee) {
      return res
        .status(400)
        .send({ message: "No employee found to link as parent" });
    }

    // Default values for the new customer
    const defaultValues = {
      contacts: {
        fname: null,
        lname: null,
        gender: null,
        email: null,
        phone: null,
      },
      tasks: {
        title: null,
        start_date: null,
        deadline: null,
        assigned_to: null,
        employees: null,
        task_status: null,
      },
      created_by: null,
      parent_id: employee._id,
    };

    // Combine user data with default values
    const userData = {
      fname,
      lname,
      phone,
      email,
      plz,
      city,
      street,
      primary_contact,
      ...defaultValues,
    };

    // Create a new customer instance
    const userInstance = new Customer(userData);

    // Save the customer instance
    const result = await userInstance.save();

    return res
      .status(200)
      .send({ message: "Customer created successfully", data: result });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Server Error" });
  }
};

exports.getCustomer = async (req, res) => {
  const result = await Customer.find();
  res.send(result);
};

exports.getCustomerData = async (req, res) => {
  try {
    const result = await Customer.findOne({ _id: req.params.id, status: { $ne: 'deleted' } });

    if (result) {
      res.send(result);
    } else {
      res.status(404).send({ message: 'Customer not found' });
    }
  } catch (error) {
    console.error('Error fetching customer data:', error);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};


exports.deleteCustomer = async (req, res) => {
  try {
    const result = await Customer.updateOne(
      { _id: req.params.id, status: { $ne: 'deleted' } },
      { $set: { status: 'deleted' } }
    );

    if (result.nModified === 1) {
      res.send({ message: 'Customer soft deleted successfully', result });
    } else if (result.n === 0) {
      // Customer not found or already soft-deleted
      res.status(404).send({ message: 'Customer not found or already soft-deleted', result });
    } else {
      // Other unexpected scenarios
      res.status(500).send({ message: 'Unexpected error occurred during soft delete', result });
    }
  } catch (error) {
    console.error('Error deleting customer:', error);
    res.status(500).send({ message: 'Internal Server Error', error });
  }
  
};
