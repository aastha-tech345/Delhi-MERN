const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/customerInfo.controller');

router.post('/create_info', roleCtrl.createCustomerInfo);
module.exports = router;