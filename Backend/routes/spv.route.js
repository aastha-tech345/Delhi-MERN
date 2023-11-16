const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/spv.controller');

router.post('/create_spv', roleCtrl.createSpv);
router.get('/get_spv', roleCtrl.getSpv);
router.get('/get_spv/:id', roleCtrl.getSpvData);
router.put('/get_spv/:id', roleCtrl.getSpvDataUpdate);
router.delete('/get_spv/:id', roleCtrl.getSpvDataDelete);
router.get('/search/:key', roleCtrl.getSpvSearch);
module.exports = router;