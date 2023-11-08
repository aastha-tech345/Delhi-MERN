const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/spv.controller');

router.post('/create_spv', roleCtrl.createSpv);
module.exports = router;