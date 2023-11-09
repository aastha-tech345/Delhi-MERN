const InvoiceInfomation = require("../models/invoice.model");
const CustomerModel = require("../models/customer.model");

exports.createInvoice = async (req, res) => {
  try {
    const {
      product,
      already_paid,
      payment_method,
      invoice_amount,
      invoice_date,
      delivery_date,
      colleague,
    } = req.body;

    const user = await CustomerModel.Customer.findOne({ created_by: "customer" });
    if (!user) {
      return res
        .status(400)
        .send({ message: "No customer found to link as parent" });
    }
    const invoice = new InvoiceInfomation.Invoice({
      product,
      already_paid,
      payment_method,
      invoice_amount,
      invoice_date,
      delivery_date,
      colleague,
      added_by: null,
      customer_id: user._id,
    });

    const result = await invoice.save();
    res.status(201).json({
      message: "invoice was created",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating invoice" });
  }
};
