"use strict";
const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/user.controller");
// const forgotPasswordCtrl = require('../controller/forgotPassword.controller');
const auth = require("../auth/auth");
const multer = require("multer");
const path=require("path")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "../public/user")); // Set your desired destination folder
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + "-" + uniqueSuffix + ".pdf");
    },
  });
  
  const upload = multer({ storage: storage });

/**
 * @swagger
 * /api/users/login:
 *   post:
 *     tags:
 *       - User Routes
 *     description: User Login
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: User Login
 *         description: Provide registered email address and password.
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/LoginSchema'
 *     responses:
 *       200:
 *         description: You will get basic user info and permission array for access managment
 */

/**
 * @swagger
 * definitions:
 *   LoginSchema:
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 *         required: true
 */
router.post("/login", userCtrl.login);

/**
 * @swagger
 * /api/users/registerMember:
 *   post:
 *     tags:
 *       - User Routes
 *     description: Create New User
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: authorization
 *         description: Provide  authorization token in header.
 *         in: header
 *         type: string
 *         required: true
 *       - name: Create User
 *         description: Create new user.
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/CreateUserSchema'
 *     responses:
 *       200:
 *         description: Success message
 */

/**
 * @swagger
 * definitions:
 *   CreateUserSchema:
 *     properties:
 *       email:
 *         type: string
 *         required: true
 *       password:
 *         type: string
 *         required: true
 *       user_role_id:
 *         type: number
 *       fname:
 *         type: string
 *       lname:
 *         type: string
 */
router.post("/register", userCtrl.register);
router.get("/all", userCtrl.getData);

router.post("/register/record/adduser/:id", userCtrl.addUser);
// router.get('/register/record', userCtrl.getData);
// router.get('/register/record/:id', userCtrl.getRegisterData);
// router.get('/register/user/record/:id', userCtrl.getUserData);
// router.delete('/register/user/record/:id', userCtrl.deleteObjectById);
router.get("/get/employeeData/:id",userCtrl.getEmployeeData)
router.post("/forgot-password", userCtrl.forgotPassword);
router.get("/forgotpassword", userCtrl.forgotPasswordVerification);
router.post("/changePassword", userCtrl.changePassword);
router.get("/register/:id", userCtrl.getRegisterData);
// router.put("/register/:id", userCtrl.getRegisterUpdate);
router.put("/update/:id",upload.single("profileImage") ,userCtrl.getRegisterUpdate);
module.exports = router;
