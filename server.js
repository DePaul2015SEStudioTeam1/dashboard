var express = require('express'),
    http = require('http'),
	path = require('path'),
    io = require('socket.io'),
    container = require('./routes/containers');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 8000);
    app.use(express.logger('dev'));
    app.use(express.bodyParser())
    app.use(express.static(path.join(__dirname, 'public')));
});

var server = http.createServer(app);
// var containerData;
// 
// var options = {
//   host: 'localhost',
//   port: 8080,
//   path: '/operations-service/containers/',
//   method: 'GET'
// };
// 
// var req = http.request(options, function(res) {
// 	console.log("statusCode: ", res.statusCode);
//   	console.log("headers: ", res.headers);
// 
//   	res.on('data', function(d) {
//     	containerData = d;
//   	});
// });
// req.end();
// 
// req.on('error', function(e) {
//   console.error(e);
// });

server.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});
