const express = require("express");
const router = express.Router();
const roleCtrl = require("../controller/role.controller");

router.post("/create_role", roleCtrl.roleCreation);
router.get("/get_role", roleCtrl.getRole);
router.get("/get_roles", roleCtrl.getRoles);
router.get("/get_role/:id", roleCtrl.getRoleData);
router.put("/get_role/:id", roleCtrl.getRoleDataUpdate);
router.delete("/get_role/:id", roleCtrl.getRoleDataDelete);
router.get("/export/:id", roleCtrl.exportRolesToCSV);
module.exports = router;
