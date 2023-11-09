const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/activity.controller');

router.post('/create_activity', roleCtrl.createActivity);
router.get('/get_activity/:id', roleCtrl.getActivityData);
module.exports = router;