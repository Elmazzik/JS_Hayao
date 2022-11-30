var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/')

var schema = mongoose.Schema({ name: String })

schema.methods.film = function(){
    console.log(this.get("name") + " сказал что-то")
}

var hayao = mongoose.model('hayao', schema)

var anime = new hayao({ name: 'Spirited' })
anime.save(function (err) {
    anime.film()
})
