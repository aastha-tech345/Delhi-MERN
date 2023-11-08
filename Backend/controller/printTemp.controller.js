const PrintInfomation = require("../models/printTemp.model");
const { UserModel } = require("../models/user.model");

exports.createPrintTemplate = async (req, res) => {
  try {
    const {
      theme,
      news,
    } = req.body;
    const print = new PrintInfomation.Print({
      theme,
      news,
      added_by: null
    });

    const result = await print.save();
    res.status(201).json({
      message: "printTemplate was created",
      result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating printTemplate" });
  }
};
