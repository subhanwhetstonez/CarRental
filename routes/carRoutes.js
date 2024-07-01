const express = require("express");
const carController = require("../controllers/carController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", carController.getAllCars);
router.get("/add", authMiddleware, carController.showAddCarPage);
router.post("/add", authMiddleware, carController.addCar);
router.get("/update/:id", authMiddleware, carController.showUpdateCarPage);
router.post("/update/:id", authMiddleware, carController.updateCar);
router.get("/delete/:id", authMiddleware, carController.deleteCar);

module.exports = router;
