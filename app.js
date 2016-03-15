var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(morgan('dev')); // log requests in console
app.use(cookieParser()); // read cookies
app.use(bodyParser());
app.use(express.static(__dirname + '/client'));

// Allows the .html suffix and renders by using ejs.
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/client');
app.set('view engine', 'ejs'); // set up templates

// Require the routes for the application, passes the app and passport objects
require('./server/routes/routes.js')(app);

app.listen(port);
console.log("Server is up on " + port);