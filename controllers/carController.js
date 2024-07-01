const carService = require("../services/carService");

class CarController {
  async getAllCars(req, res) {
    try {
      const cars = await carService.getAllCars();
      res.render("cars/carList", { cars });
    } catch (error) {
      res.status(400).render("cars/carList", { error: error.message });
    }
  }

  showAddCarPage(req, res) {
    res.render("cars/addCar");
  }

  async addCar(req, res) {
    try {
      const car = await carService.addCar(req.body);
      res.redirect("/api/cars");
    } catch (error) {
      res.status(400).render("cars/addCar", { error: error.message });
    }
  }

  showUpdateCarPage(req, res) {
    res.render("cars/updateCar");
  }

  async updateCar(req, res) {
    try {
      const { id } = req.params;
      await carService.updateCar(id, req.body);
      res.redirect("/api/cars");
    } catch (error) {
      res.status(400).render("cars/updateCar", { error: error.message });
    }
  }

  async deleteCar(req, res) {
    try {
      const { id } = req.params;
      await carService.deleteCar(id);
      res.redirect("/api/cars");
    } catch (error) {
      res.status(400).render("cars/carList", { error: error.message });
    }
  }
}

module.exports = new CarController();
