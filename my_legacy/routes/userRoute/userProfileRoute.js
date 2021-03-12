var express = require('express');
var router = express.Router();
//var bodyParser = require('body-parser');
var usersProfileController = require('../../controllers/users/userProfileController');

router.post('/register', usersProfileController.registerUser);

router.post('/login', usersProfileController.loginUser);

router.post('/get-all', usersProfileController.loginUser);

module.exports = router;