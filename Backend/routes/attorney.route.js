const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/attorney.controller');

router.post('/create_attorney', roleCtrl.createAttorney);
router.get('/get_attorney', roleCtrl.getAttorney);
router.get('/get_attorney/:id', roleCtrl.getAttorneyData);
router.put('/get_attorney/:id', roleCtrl.getAttorneyDataUpdate);
router.delete('/get_attorney/:id', roleCtrl.getAttorneyDataDelete);
router.get('/search/:key', roleCtrl.getAttorneySearch);
module.exports = router;