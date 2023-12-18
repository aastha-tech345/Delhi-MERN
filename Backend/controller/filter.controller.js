const FilterInfomation = require("../models/filter.model");
const { UserModel } = require("../models/user.model");
const ApiFeatures = require("../utils/apiFeatures");

exports.createFilter = async (req, res) => {
  try {
    const {
      fname,
      lname,
      dob,
      plz,
      telephone,
      mobil,
      status,
      client_id,
      next_shipping,
      permanent_donors,
      added_by,
      parent_id,
    } = req.body;
    const print = new FilterInfomation.FilterSchema({
      fname,
      lname,
      dob,
      plz,
      telephone,
      mobil,
      status,
      client_id,
      next_shipping,
      permanent_donors,
      added_by:"user",
      parent_id,
    });

    const result = await print.save();
    return res.status(201).json({
      status: 201,
      message: "Filter Data was created",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating Filter" });
  }
};

exports.getFilterData = async (req, res) => {
  try {
    const resultPerPage = 10;

    const countPage = await FilterInfomation.FilterSchema.countDocuments({
      status: "active",
    });

    let pageCount = Math.ceil(countPage / resultPerPage);

    const apiFeatures = new ApiFeatures(
        FilterInfomation.FilterSchema.find({ status: "active" }),
      req.query
    )
      .reverse()
      .pagination(resultPerPage);

    const result = await apiFeatures.query;

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

exports.getFilterSearch = async (req, res) => {
    try {
      const searchKey = req.params.searchKey;
      const result = await FilterInfomation.FilterSchema.find({
        $or: [
          { fname: { $regex: searchKey, $options: "i" } },
          { lname: { $regex: searchKey, $options: "i" } },
          { email: { $regex: searchKey, $options: "i" } },
          { telephone: { $regex: searchKey, $options: "i" } },
          { client_id: { $regex: searchKey, $options: "i" } },
          { mobil: { $regex: searchKey, $options: "i" } },
          { next_shipping: { $regex: searchKey, $options: "i" } },
          { permanent_donors: { $regex: searchKey, $options: "i" } },
          { dob: { $regex: searchKey, $options: "i" } },
          { plz: { $regex: searchKey, $options: "i" } },
        ],
      });
      return res.send(result);
    } catch (error) {
      console.error("Error searching data:", error.message);
      res.status(500).send({ error: "Server Error" });
    }
  };
