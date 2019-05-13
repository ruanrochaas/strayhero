let express = require('express');
let router = require('../app/routes/router.js');//mudei aqui
let bodyParser = require('body-parser');


module.exports = function () {
    let app = express();
    app.set('port', 3000);
    app.use(express.static('./public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    router(app);
    return app;
}