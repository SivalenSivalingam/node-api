var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 8082;

app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send("node api server running...");
});

app.get('/api/values', function (request, response) {
	getApiRequest(request, response);
});

app.listen(port, function () {
	console.log("Server started on port  " + port);
});

function getApiRequest(request, response) {
	response.send({
		msg: "Hello world"
	});
}