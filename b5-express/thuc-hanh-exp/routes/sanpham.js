var express = require('express');
var router = express.Router();
var spController = require('../controller/sanpham.controller');


router.get('/', spController.getList);

router.get('/add', spController.addProduct);

router.post('/add', spController.addProduct);   

//cần có exports
module.exports = router;