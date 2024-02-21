const { Customer } = require("../models/customer.model");
const UserModel = require("../models/user.model");
const ApiFeatures = require("../utils/apiFeatures");

exports.createCustomer = async (req, res) => {
  try {
    const emailFind = await Customer.findOne({
      "customer.email": req.body.customer.email,
    });
    if (emailFind) {
      return res.status(406).json({
        message: "Email Already Exists",
        success: false,
      });
    }
    const result = await Customer.create(req.body);
    return res.status(200).json({
      success: true,
      message: "Customer created successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

// exports.editCustomer = async (req, res) => {
//   // try {
//   //   const findCustomer = await Customer.findOne({
//   //     "customer.email": req.query.email,
//   //   });
//   //   console.log(findCustomer);
//   //   const data = await Customer.findByIdAndUpdate(findCustomer?._id, req.body, {
//   //     new: true,
//   //   });
//   //   // const data = await Customer.findByIdAndUpdate(req.params.id, req.body, {
//   //   //   new: true,
//   //   // });

//   //   return res.status(200).json({
//   //     success: true,
//   //     message: "Customer updated successfully",
//   //     data: data,
//   //   });
//   // } catch (error) {
//   //   console.error("Error searching data:", error.message);
//   //   res.status(500).json({ error: "Server Error" });
//   // }
//   try {
//     const result = await Customer.updateOne(
//       { _id: req.params.id },
//       { $set: req.body }
//     );
//     res.send(result);
//   } catch (error) {
//     console.error("Error updating contact data:", error);
//     res.status(500).send("Internal Server Error");
//   }
// };
exports.editCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    console.log("SDHS", updatedCustomer);
    if (!updatedCustomer) {
      return res
        .status(404)
        .json({ success: false, message: "Customer not found" });
    }

    res.status(200).json({
      success: true,
      message: "Customer updated successfully",
      data: updatedCustomer,
    });
  } catch (error) {
    console.error("Error updating customer:", error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

exports.getCustomer = async (req, res) => {
  try {
    const resultPerPage = req.query.resultPerPage || 10;

    const countPage = await Customer.countDocuments({
      status: "active",
    });

    let pageCount = Math.ceil(countPage / resultPerPage);
    const apiFeatures = new ApiFeatures(
      Customer.find({ status: "active" }).populate("created_by"),
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

exports.getCustomerData = async (req, res) => {
  try {
    const result = await Customer.findOne({
      "customer.email": req.query.email,
      // _id:req.query.id
      status: { $ne: "deleted" },
    });
    //
    if (result) {
      res.send(result);
    } else {
      res.status(404).send({ message: "Customer not found" });
    }
  } catch (error) {
    console.error("Error fetching customer data:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

// exports.editCustomer = async (req, res) => {
//   try {
//     const data = await Customer.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });

//     if (!data) {
//       res.status(500).json({
//         success: false,
//         message: "Customer updated Unsuccessfully",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Customer updated successfully",
//       data: data,
//     });
//   } catch (error) {
//     console.error("Error searching data:", error.message);
//     res.status(500).json({ error: "Server Error" });
//   }
// };

exports.deleteCustomer = async (req, res) => {
  // try {
  //   const result = await Customer.updateOne(
  //     { "customer.email": req.query.email, status: { $ne: "deleted" } },
  //     { $set: { status: "deleted" } }
  //   );
  //   res.send(result);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).send("Internal Server Error");
  // }
  try {
    const result = await Customer.updateOne(
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
exports.searchCustomer = async (req, res) => {
  try {
    const searchKey = req.params.searchKey;
    const result = await Customer.find({
      $or: [
        { "customer.fname": { $regex: searchKey, $options: "i" } },
        { "customer.id": { $regex: searchKey, $options: "i" } },
        { "customer.email": { $regex: searchKey, $options: "i" } },
        { "customer.phone": { $regex: searchKey, $options: "i" } },
      ],
    });
    res.send(result);
    // return res.send(result);
  } catch (error) {
    console.error("Error searching data:", error.message);
    res.status(500).send({ error: "Server Error" });
  }
};

exports.getUserCustomer = async (req, res) => {
  try {
    let resultPerPage = 10;
    const baseQuery = Customer.find({
      created_by: req.params.id,
      status: "active",
    });
    const apiFeatures = new ApiFeatures(baseQuery, req.query)
      .reverse()
      .pagination(resultPerPage);

    const result = await apiFeatures.query;

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "No Data Found",
      });
    }

    let pageCount = Math.ceil(result?.length / resultPerPage);

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
      message: "Customer under user",
      result: result,
      pageCount: pageCount,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
