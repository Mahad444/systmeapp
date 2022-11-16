const express = require('express');
const routes = express.Router();
const userController = require('../controllers/userController')


//routes for UPDATE,DELETE,GET,PUT
routes.get('/',userController.view);


module.exports = routes
