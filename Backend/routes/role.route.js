const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/role.controller');

router.post('/create_role', roleCtrl.roleCreation);
module.exports = router;