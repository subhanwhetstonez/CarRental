const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.get("/register", authController.showRegisterPage);
router.post("/register", authController.register);
router.get("/login", authController.showLoginPage);
router.post("/login", authController.login);

module.exports = router;
