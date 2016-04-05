var express = require('express'); 
var http = require('http');
var request = require('request')

var js = require('./JS/utilities.js')
//var fn = require('./JS/functions.js')*/

var app = express();
var request = require('request')

var engine = require('ejs-locals');
app.set('views', __dirname + '/views');
app.engine('ejs', engine);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

require('./JS/routes.js')(app)

global.appRoot = path.resolve(__dirname);
console.log(appRoot)
var mysql = require('mysql');


var server = app.listen(process.env.PORT || 7000, function() {
  console.log('Listening on port %d', server.address().port);
});