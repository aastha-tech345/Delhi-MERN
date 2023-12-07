const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/print.controller');

router.post('/create_print', roleCtrl.createPrintTemplate);
router.get('/get_print', roleCtrl.getPrint);
router.get('/get_print/:id', roleCtrl.getPrintData);
router.delete('/get_print/:id', roleCtrl.getPrintDataDelete);
router.put('/get_print/edit/:id', roleCtrl.getPrintDataUpdate);
module.exports = router;