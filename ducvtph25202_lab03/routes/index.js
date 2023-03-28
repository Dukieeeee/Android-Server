var express = require('express');
var router = express.Router();
var homeController = require('../controller/home.controller');
var bodyParser = require('body-parser');

const data = {
  'list': [
    {
      "id": "4", "fullname": "Đức", "username": "thanhduc719", "password": "123456", "email": "thanhduc719@gmail.com", "group": "2"
    },
    {
      "id": "4", "fullname": "Đức", "username": "thanhduc719", "password": "123456", "email": "thanhduc719@gmail.com", "group": "2"
    },
    {
      "id": "4", "fullname": "Đức", "username": "thanhduc719", "password": "123456", "email": "thanhduc719@gmail.com", "group": "2"
    },
    {
      "id": "4", "fullname": "Đức", "username": "thanhduc719", "password": "123456", "email": "thanhduc719@gmail.com", "group": "2"
    },
    {
      "id": "4", "fullname": "Đức", "username": "thanhduc719", "password": "123456", "email": "thanhduc719@gmail.com", "group": "2"
    }
  ]

}
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', homeController.index);

router.get('/table', (req, res) => {
  res.render('table', {
    id: '4', fullname: 'Đức', username: 'thanhduc719', password: '123456', email: 'thanhduc719@gmail.com', group: '2',
    id2: '5', fullname2: 'Quân', username2: 'quan2711', password2: '213456', email2: 'quan2711@gmail.com', group2: '1',
    id3: '6', fullname3: 'Phương', username3: 'phuonghoai2102', password3: '312456', email3: 'phuong2102@gmail.com', group3: '1',
    id4: '7', fullname4: 'Cường', username4: 'xuangdic', password4: '412356', email4: 'xuangdic@gmail.com', group4: '2',
    id5: '8', fullname5: 'Hải', username5: 'hai3012', password5: '512346', email5: 'hai3012@gmail.com', group5: '1',
  });
});

// router.get('/table', (req, res) => {
//   res.render('table', {data});
// });

router.get('/form', homeController.form);

router.post('/form', (req, res) => {
  const { full, user, pass, mail, groupp } = req.body;
  res.render('submit', { fullname: full, username: user, password: pass, email: mail, group: groupp });
})


module.exports = router;
