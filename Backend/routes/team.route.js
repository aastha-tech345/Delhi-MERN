const express = require('express');
const router = express.Router();
const teamCtrl = require('../controller/team.controller');

router.post('/create_teams', teamCtrl.teamCreation);
module.exports = router;