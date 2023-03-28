var express = require('express');
var fs = require('fs');
var router = express.Router();
var spController = require('../controller/sanpham.controller');
// const path = require('path')
// app.use('/images', express.static(path.join(__dirname, '/public/images')))

router.get('/list', spController.list);

router.get('/add', spController.add);

router.get('/update', spController.update);

router.get('')

module.exports = router;
