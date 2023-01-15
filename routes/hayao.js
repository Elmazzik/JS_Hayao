var express = require('express');
var router = express.Router();
var Hayao = require("../models/hayao").Hayao

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
    Hayao.findOne({nick:req.params.nick}, function(err,hayao){
        if(err) return next(err)
        if(!hayao) return next(new Error("Нет такого аниме на этой странице"))
        res.render('hayao', {
            title: hayao.title,
            picture: hayao.avatar,
            desc: hayao.desc
        })
    })
})

module.exports = router;