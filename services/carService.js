const Car = require("../models/Car.js");

class CarService {
  async getAllCars() {
    return await Car.findAll();
  }

  async addCar(carData) {
    return await Car.create(carData);
  }

  async updateCar(id, carData) {
    return await Car.update(carData, { where: { id } });
  }

  async deleteCar(id) {
    return await Car.destroy({ where: { id } });
  }
}

module.exports = new CarService();
