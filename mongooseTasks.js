var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')

var hayao = require("./models/hayao").hayao

var hayao = new hayao({
title: "Ходячий замок",
nick: "castle"
})

console.log(hayao)
hayao.save(function(err, hayao, affected){
    console.log(hayao.title)
})