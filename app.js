const express = require('express');
const valideJson = require('./valideJson.js');
const port = process.env.port || 4242; 

console.log(valideJson.valideJson());

var app = express();

app.get('/', (req,res) => {
	res.send('hello Yoann');
});

app.get('/datamodel/check', (req,res) => {
	res.send(JSON.stringify(valideJson.valideJson()));
});

app.listen(port);