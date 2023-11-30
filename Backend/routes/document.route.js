const express = require('express');
const router = express.Router();
const roleCtrl = require('../controller/document.controller');
const multer = require("multer");
const path=require("path")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "../public/document")); // Set your desired destination folder
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + "-" + uniqueSuffix + ".pdf");
    },
  });
  
  const upload = multer({ storage: storage });

router.post('/create_document',upload.single("document_upload") ,roleCtrl.createDocument);
router.get('/get_document', roleCtrl.getDocument);
router.get('/get_document/:id', roleCtrl.getDocumentData);
router.put('/get_document/update/:id', upload.single("document_upload") ,roleCtrl.getDocumentDataUpdate);
router.put('/get_document/delete/:id', roleCtrl.getDocumentDataDelete);
router.get('/search/:key', roleCtrl.getDocumentSearch);
module.exports = router;