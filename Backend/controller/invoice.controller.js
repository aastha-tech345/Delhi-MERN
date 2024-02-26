const InvoiceInfomation = require("../models/invoice.model");

exports.createInvoice = async (req, res) => {
  try {
    // const {
    //   product,
    //   alreadyPaid,
    //   paymentMethod,
    //   invoiceAmount,
    //   invoiceDate,
    //   deliveryDate,
    //   colleague,
    //   customer_id,
    // } = req.body;
    // const invoice = new InvoiceInfomation.Invoice({
      // product,
      // alreadyPaid,
      // paymentMethod,
      // invoiceAmount,
      // invoiceDate,
      // deliveryDate,
      // colleague,
    //   customer_id,
    // });

    const result = await InvoiceInfomation.Invoice.create(req.body);
    res.status(201).json({
      message: "invoice was created",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating invoice" });
  }
};

exports.getInvoice = async (req, res) => {
  try {
    const result = await InvoiceInfomation.Invoice.find();
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getInvoiceData = async (req, res) => {
  try {
    const result = await InvoiceInfomation.Invoice.findOne({
      _id: req.params.id,
    });
    if (!result) {
      return res.status(404).send({ error: "Invoice not found" });
    }
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getInvoiceDataUpdate = async (req, res) => {
  try {
    const result = await InvoiceInfomation.Invoice.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getInvoiceDataDelete = async (req, res) => {
  try {
    const result = await InvoiceInfomation.Invoice.deleteOne({
      _id: req.params.id,
    });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

exports.getInvoiceSearch = async (req, res) => {
  try {
    const result = await InvoiceInfomation.Invoice.find({
      $or: [{ fname: { $regex: req.params.key } }],
    });
    res.send(result);
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
