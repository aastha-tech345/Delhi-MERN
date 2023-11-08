const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/document.controller');

router.post('/create_document', roleCtrl.createDocument);
module.exports = router;