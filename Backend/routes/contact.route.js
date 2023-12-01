const express = require("express");
const router = express.Router();
const roleCtrl = require("../controller/contact.controller");

router.post("/create_contact", roleCtrl.createContact);
router.get("/get_contact", roleCtrl.getContact);
router.get("/get_contact/:id", roleCtrl.getContactData);
router.put("/get_contact/:id", roleCtrl.getContactDataUpdate);
router.delete("/get_contact/:id", roleCtrl.getContactDataDelete);
router.get("/search/:searchKey", roleCtrl.getContactSearch);
module.exports = router;
