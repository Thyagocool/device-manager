const route = require('express').Router();
const CategoryController = require('../controllers/CategoryController')

route
    .get('/', CategoryController.findAll)
    .post('/', CategoryController.save)
    .delete('/', CategoryController.delete)


module.exports = route;