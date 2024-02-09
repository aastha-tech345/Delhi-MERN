const express = require("express");
const router = express.Router();
const customerController = require("../controller/customer.controller");

// Example route definition
router.post("/create", customerController.createCustomer);
router.get("/get_records", customerController.getCustomer);
router.get("/get_record", customerController.getCustomerData);
router.delete("/get_record/:id", customerController.deleteCustomer);
router.put("/get_record/edit", customerController.editCustomer);

router.get("/user/customer/:id", customerController.getUserCustomer);
router.get("/search/:searchKey", customerController.searchCustomer);
// router.get('/search', customerController.searchCustomer);
module.exports = router;
