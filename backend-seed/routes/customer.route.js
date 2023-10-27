const express = require('express');
const router = express.Router();
const coustomerCtrl = require('../controller/customer.controller');

router.post('/create_coustomer', coustomerCtrl.createCustomer);
module.exports = router;