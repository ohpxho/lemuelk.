require('dotenv').config();
const path = require('node:path');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

require('./api/model/connection');

const apiRouter = require('./api/route/router');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public', 'dist/public')));

app.use('/api', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
 	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 	next();
});

app.use('/api', apiRouter);

app.get('*', function(req, res, next) {
 res.sendFile(path.join(__dirname, 'public', 'dist/public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server Connection ${port}`);
});