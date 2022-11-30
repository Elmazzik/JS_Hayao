var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

var hayao = mongoose.model('hayao', { name: String })

var anime = new hayao({ name: 'Spirited' })
anime.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Hey')
    }
})
