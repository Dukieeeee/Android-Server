var express = require('express');
var router = express.Router();
var spController = require('../controller/sanpham.controller');

router.get('/', spController.list);

router.get('/add', spController.add);

module.exports = router;
