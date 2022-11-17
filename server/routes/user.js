const express = require('express');
const routes = express.Router();
const userController = require('../controllers/userController')


//routes for UPDATE,DELETE,GET,PUT
routes.get('/',userController.view);
routes.post('/',userController.find);
routes.get('/adduser',userController.forms);
routes.post('/adduser',userController.create);


module.exports = routes
