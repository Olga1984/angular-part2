var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

var port = process.env.PORT || 3001;

app.use(express.static(__dirname + 'dist/angular-p2'));
app.get('/news', (req, res) => res.sendFile(path.join(__dirname)));

var server = http.createServer(app);

server.listen(port, ()=> console.log('node running on 3001')); //run it with   node server.js
