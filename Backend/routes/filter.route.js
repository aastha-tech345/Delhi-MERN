const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/filter.controller');

router.post('/create_filter', roleCtrl.createFilter);
router.get('/get_filter', roleCtrl.getFilterData);
router.get("/search/:searchKey", roleCtrl.getFilterSearch);
module.exports = router;