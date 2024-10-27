// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// create new User
router.post('/user', userController.createUser);
// get all Users
router.get('/users', userController.getUsers);
// get a User
router.get('/user', userController.getUser);

// export the router module so that server.js file can use it
module.exports = router;