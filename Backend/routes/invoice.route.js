const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/invoice.controller');

router.post('/create_invoice', roleCtrl.createInvoice);
router.get('/get_invoice', roleCtrl.getInvoice);
router.get('/get_invoice/:id', roleCtrl.getInvoiceData);
router.put('/get_invoice/:id', roleCtrl.getInvoiceDataUpdate);
router.delete('/get_invoice/:id', roleCtrl.getInvoiceDataDelete);
router.get('/search/:key', roleCtrl.getInvoiceSearch);
module.exports = router;