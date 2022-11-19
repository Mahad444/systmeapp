const express = require('express');
const routes = express.Router();
const userController = require('../controllers/userController')


//routes for UPDATE,DELETE,GET,PUT
routes.get('/',userController.view);
routes.post('/',userController.find);
routes.post('/:id',userController.delete);
routes.get('/adduser',userController.forms);
routes.post('/adduser',userController.create);
routes.get('/edituser/:id',userController.edit);
routes.post('/edituser/:id',userController.update);
routes.get('/:id',userController.delete);


module.exports = routes
