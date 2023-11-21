

const express = require('express');
const router = express.Router();
const customerController = require('../controller/customer.controller');

// Example route definition
router.post('/create', customerController.createCustomer);
router.get('/get_record', customerController.getCustomer);
router.get('/get_record/:id', customerController.getCustomerData);
router.delete('/get_record/:id', customerController.deleteCustomer);



module.exports = router;
