const Car = require('../models/carModel');

exports.getAllCars = (req, res) => {
    Car.getAll((err, cars) => {
        if (err) return res.status(500).json(err);
        res.json(cars);
    });
};

exports.addCar = (req, res) => {
    Car.add(req.body, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};

exports.deleteCar = (req, res) => {
    Car.delete(req.params.id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
};
