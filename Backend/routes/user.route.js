"use strict";
const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/user.controller");
// const forgotPasswordCtrl = require('../controller/forgotPassword.controller');
const auth = require("../auth/auth");
const multer = require("multer");
const path = require("path");

const upload = multer({
  limits: 1000000000 * 2000000,
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, "../public/user"));
    },

    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
    },
  }),
});

router.post("/login", userCtrl.login);

router.post("/register", userCtrl.register);
router.get("/all", userCtrl.getData);
router.get("/:id", userCtrl.getUserById);
router.get("/get/employeeData", userCtrl.getEmployeeData);
router.delete("/get/employeeData/:id", userCtrl.getUserDataDelete);
router.put("/update/employeeData/:id", userCtrl.updateEmployeeDetails);
router.post("/forgot-password", userCtrl.forgotPassword);
router.get("/forgotpassword", userCtrl.forgotPasswordVerification);
router.post("/changePassword", userCtrl.changePassword);
router.get("/register/:id", userCtrl.getRegisterData);
router.get("/search/:searchKey", userCtrl.getUserSearch);
// router.put("/register/:id", userCtrl.getRegisterUpdate);
router.put("/update/:id", upload.single("profileImage"), userCtrl.updateUser);
module.exports = router;
