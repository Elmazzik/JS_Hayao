var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Унесенные призраками */
router.get('/spirited', function(req, res, next) {
  res.render('hayao', {
      title: "Унесенные призраками",
      picture: "images/spirited_away.jpg",
      desc: "10-летняя девочка по имени Тихиро Огино переезжает в новый дом и попадает в другой мир, населённый призраками и монстрами."
  });
});

/* Ходячий замок */
router.get('/castle', function(req, res, next) {
  res.render('hayao', {
      title: "Ходячий замок",
      picture: "images/moving_castle.jpg",
      desc: "Скромная жизнь шляпницы Софи полностью изменяется, когда в окрестностях её города появляется ходячий замок таинственного волшебника Хаула. Чтобы разгадать тайны проклятий и снять их, героям приходится пройти через множество испытаний."
  });
});

/* Мой сосед Тоторо */
router.get('/totoro', function(req, res, next) {
  res.render('hayao', {
      title: "Мой сосед Тоторо",
      picture: "images/totoro.jpg",
      desc: "Сестры Сацуки и Мэй переезжают вместе с папой в деревенский дом. Однажды девочки обнаруживают, что по соседству с ними живут лесные духи — хранители леса во главе со своим могущественным и добрым повелителем Тоторо. Постепенно Тоторо становится другом девочек, помогая им в их повседневных приключениях."
  });
});

module.exports = router;