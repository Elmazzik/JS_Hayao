var express = require('express');
var router = express.Router();
var Hayao = require("../models/hayao").Hayao
var User = require("./../models/user").User


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', counter: req.session.counter });
});

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
res.render('logreg',{title: 'Вход'});
});
res.render('logreg',{error:null});

/* POST login/registration page. */
/* POST login/registration page. */
router.post('/logreg', function (req, res, next) {
  var username = req.body.username
  var password = req.body.password
  User.findOne({ username: username }, function (err, user) {
    if (err) return next(err)
    if (user) {
      if (user.checkPassword(password)) {
        req.session.user = user._id
        res.redirect('/')
      } else {
        res.render('logreg', { title: 'Вход' })
        res.render('logreg',{error:"Пароль не верный"});
      }
    } else {
      var user = new User({ username: username, password: password })
      user.save(function (err, user) {
        if (err) return next(err)
        req.session.user = user._id
        res.redirect('/')
      })
    }
  })
});

/* POST logout. */
router.post('/logout', function(req, res, next) {
    req.session.destroy()
    res.locals.user = null
    res.redirect('/')
});



// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// /* Унесенные призраками */
// router.get('/spirited', function(req, res, next) {
//   res.render('hayao', {
//       title: "Унесенные призраками",
//       picture: "images/spirited_away.jpg",
//       desc: "10-летняя девочка по имени Тихиро Огино переезжает в новый дом и попадает в другой мир, населённый призраками и монстрами."
//   });
// });

// /* Ходячий замок */
// router.get('/castle', function(req, res, next) {
//   res.render('hayao', {
//       title: "Ходячий замок",
//       picture: "images/moving_castle.jpg",
//       desc: "Скромная жизнь шляпницы Софи полностью изменяется, когда в окрестностях её города появляется ходячий замок таинственного волшебника Хаула. Чтобы разгадать тайны проклятий и снять их, героям приходится пройти через множество испытаний."
//   });
// });

// /* Мой сосед Тоторо */
// router.get('/totoro', function(req, res, next) {
//   res.render('hayao', {
//       title: "Мой сосед Тоторо",
//       picture: "images/totoro.jpg",
//       desc: "Сестры Сацуки и Мэй переезжают вместе с папой в деревенский дом. Однажды девочки обнаруживают, что по соседству с ними живут лесные духи — хранители леса во главе со своим могущественным и добрым повелителем Тоторо. Постепенно Тоторо становится другом девочек, помогая им в их повседневных приключениях."
//   });
// });

module.exports = router;