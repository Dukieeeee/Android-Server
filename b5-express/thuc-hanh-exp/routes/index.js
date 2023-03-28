var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', hoTen: "Fluer De Lis"});
});

// router.get('/abc.html', (req, res, next)=> {
//   res.send("Send")
// });

// router.get('/sp/:id', (req, res, next) => {
//   console.log("Dữ liệu gửi qua params");
//   console.log(req.params);

//   console.log("Dữ liệu gửi qua query");
//   console.log(req.query);

//   res.send(req.query);
// })

// router.post('/sp', (req, res, next)=>{
//   console.log("Dữ liệu post");
//   console.log(req.body);
//   res.send(req.body);
// })


module.exports = router;
