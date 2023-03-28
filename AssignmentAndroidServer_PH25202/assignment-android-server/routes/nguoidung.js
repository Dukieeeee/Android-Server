var express = require('express');
var router = express.Router();
var userController = require('../controller/user.controller');

router.get('/list', userController.list);

router.get('/add', userController.add);

router.get('/login', userController.login);

module.exports = router;
