const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/invoice.controller');

router.post('/create_invoice', roleCtrl.createInvoice);
module.exports = router;