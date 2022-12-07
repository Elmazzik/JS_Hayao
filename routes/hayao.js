var express = require('express');
var router = express.Router();
var Hayao = require('../models/hayao').Hayao;
var async = require("async")

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
    Hayao.findOne({nick:req.params.nick}, function(err,Hayao){
        if(err) return next(err)
        if(!Hayao) return next(new Error("Нет такого аниме на странице"))
        res.render('Hayao', {
            title: Hayao.title,
            picture: Hayao.avatar,
            desc: Hayao.desc
        })
    })
  })
//       function(err,result){
//           if(err) return next(err)
//           var hayao = result[0]
//           var anime = result[1] || []
//           if(!planet) return next(new Error("Нет такого аниме на странице"))
//           res.render('hayao', {
//               title: hayao.title,
//               picture: hayao.avatar,
//               desc: hayao.desc,
//               menu: hayao
//           });
//       })
// })

module.exports = router;