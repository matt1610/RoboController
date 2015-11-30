var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var sock;

var cors = require('cors');
var bodyParser = require('body-parser');

var photoController = require('./controllers/photoController.js');
app.use(cors());

app.use(express.static(__dirname + '/pages'));

app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/img", express.static(__dirname + '/img'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(cors());

server.listen(process.env.PORT || 8080);

app.get('/', function (req, res) {
	console.log('test');
  	// res.sendfile(__dirname + '/index.html');
});

app.get('/set', function (req, res) {
  	console.log(req.query);
	res.json({success : true});
	sock.emit('news', req.query);
});

app.post('/set', function (req, res) {
	console.log(req.body);
	res.json({success : true});
	sock.emit('news', req.body);
});



io.on('connection', function (socket) {
	sock = socket;
});


console.log('Running on :8080');













