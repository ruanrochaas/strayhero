let http = require('http');
var app = require('./config/express')();
var db = require('./config/database.js');


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server rodando na porta' + app.get('port'));
});

db('mongodb+srv://strayhero:2IgtI3ucnm6YM7tB@cluster0-tppdt.mongodb.net/strayhero?retryWrites=true');//Colocar url do ATLAS!!