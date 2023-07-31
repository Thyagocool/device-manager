const route = require('express').Router();
const DeviceController = require('../controllers/DeviceController')

route
    .get('/', DeviceController.findDevices)
    .post('/', DeviceController.save)
    .delete('/', DeviceController.delete)


module.exports = route;