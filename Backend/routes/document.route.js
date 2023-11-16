const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/document.controller');

router.post('/create_document', roleCtrl.createDocument);
router.get('/get_document', roleCtrl.getDocument);
router.get('/get_document/:id', roleCtrl.getDocumentData);
router.put('/get_document/:id', roleCtrl.getDocumentDataUpdate);
router.delete('/get_document/:id', roleCtrl.getDocumentDataDelete);
router.get('/search/:key', roleCtrl.getDocumentSearch);
module.exports = router;