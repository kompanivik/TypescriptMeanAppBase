/// <reference path="../typings/tsd.d.ts" />
import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
//todo: need logging
//todo: coockie-parser?
//todo: body-parser?

var index = require('./routes/index');

var port: number = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//app.use(logger('dev'));
/*app.use(bodyParser.urlencoded({
    extended: false
}));*/
//app.use(coockieParser()); 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err.message = '404';
    next(err);
}); 
/*var renderIndex = (req: express.Request, res: express.Response) => {
    res.render('index', {title: 'meantype'});
}*/
 
// app.get('/', renderIndex);
 
var server = app.listen(port, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});