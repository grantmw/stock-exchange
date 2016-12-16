const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));

app.use(function(req, res, next) { 
	res.header('Access-Control-Allow-Origin', "*"); 
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE'); 
	res.header('Access-Control-Allow-Headers', 'Content-Type'); 
	next();
});

app.get('/api/posts', (req, res) => {
  res.send([{ id: 1 }]);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log('Server started');