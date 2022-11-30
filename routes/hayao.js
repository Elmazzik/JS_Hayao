var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с hayao');
});

/* Страница аниме */
router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
});

/* Страница героев */
router.get('/:nick', function(req, res, next) {
  async.parallel([
          function(callback){
            hayao.findOne({nick:req.params.nick}, callback)
          },
          function(callback){
            hayao.find({},{_id:0,title:1,nick:1},callback)
          }
      ],
      function(err,result){
          if(err) return next(err)
          var hayao = result[0]
          var anime = result[1] || []
          if(!planet) return next(new Error("Нет такого аниме на странице"))
          res.render('hayao', {
              title: hayao.title,
              picture: hayao.avatar,
              desc: hayao.desc,
              menu: hayao
          });
      })
})

module.exports = router;