const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/contact.controller');

router.post('/create_contact', roleCtrl.createContact);
module.exports = router;