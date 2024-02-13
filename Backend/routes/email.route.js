const express = require('express');
const router = express.Router();
const emailCtrl = require('../controller/email.controller');

router.post('/create_email', emailCtrl.createEmailTemplate);
router.get('/get_email', emailCtrl.getEmail);
router.get('/get_email/:id', emailCtrl.getEmailData);
router.delete('/get_email/:id', emailCtrl.getEmailDataDelete);
router.put('/get_email/:id', emailCtrl.getEmailDataUpdate);
module.exports = router;