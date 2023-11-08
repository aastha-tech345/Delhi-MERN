const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/printTemp.controller');

router.post('/create_print', roleCtrl.createPrintTemplate);
module.exports = router;