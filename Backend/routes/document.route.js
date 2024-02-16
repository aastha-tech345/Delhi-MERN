const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/document.controller');
const multer = require("multer");
const path=require("path")
const imageUplaod = multer({
  limits: 1000000000 * 2000000,
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, "../public/document"));
    },
    //   fileFilter(file, cb) {
    //     if (!file.originalname.match(/\.(jpg|jpeg|png|gif|eps|raw|cr2|nef|orf|sr2|bmp|tif|tiff)$/)) {
    //         return cb(new Error('Please upload a valid image file'))
    //     }
    //     cb(undefined, true)
    // },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
    },
  }),
});

router.post('/create_document',imageUplaod.single("document_upload") ,roleCtrl.createDocument);
router.get('/get_document', roleCtrl.getDocument);
router.get('/get_document/:id', roleCtrl.getDocumentData);
router.put('/get_document/update/:id', imageUplaod.single("document_upload") ,roleCtrl.getDocumentDataUpdate);
router.put('/get_document/delete/:id', roleCtrl.getDocumentDataDelete);
router.delete('/get_document/:id', roleCtrl.getDocumentDataDelete);
// router.put('/get_document/:id', roleCtrl.getDocumentDataDelete);`
router.get('/search/:key', roleCtrl.getDocumentSearch);
module.exports = router;