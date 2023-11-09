const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/attorney.controller');

router.post('/create_attorney', roleCtrl.createAttorney);
module.exports = router;