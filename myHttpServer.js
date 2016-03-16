var express = require('express');
var path = require('path');
var app = express();

app.get('/css/style.css', function(request, response){
	console.log("dirName: " + __dirname);
	response.sendFile(path.join(__dirname + '/App/css/style.css'));
});

app.get('/js/index.js', function(request, response){
	console.log("dirName: " + __dirname);
	response.sendFile(path.join(__dirname + '/App/js/index.js'));
});

app.get('/js/trackDisplay.js', function(request, response){
	console.log("dirName: " + __dirname);
	response.sendFile(path.join(__dirname + '/App/js/trackDisplay.js'));
});


app.get('/callback.html', function(request, response){
	console.log("dirName: " + __dirname);
	response.sendFile(path.join(__dirname + '/App/callback.html'));
});

app.get('/', function(request, response){
	console.log("dirName: " + __dirname);
	response.sendFile(path.join(__dirname + '/App/index.html'));
});


app.listen(8080, function(){
	console.log('Soundcloud app listening on 8080');
});