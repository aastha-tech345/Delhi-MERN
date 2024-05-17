const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/customerInfo.controller');

router.post('/create_info', roleCtrl.createCustomerInfo);
router.get('/get_info', roleCtrl.getCustomerInfo);
router.get('/get_info/:id', roleCtrl.getCustomerData);
router.put('/get_info/:id', roleCtrl.getCustomerDataUpdate);
router.delete('/get_info/:id', roleCtrl.getCustomerDataDelete);
router.get('/search/:key', roleCtrl.getCustomerInfoSearch);
module.exports = router;