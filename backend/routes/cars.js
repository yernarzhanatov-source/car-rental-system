const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

router.get('/', carController.getAllCars);
router.post('/add', carController.addCar);
router.delete('/:id', carController.deleteCar);

module.exports = router;
