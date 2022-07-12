require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

require('./api/model/connection');

const apiRouter = require('./api/route/router');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.use('/api', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
 	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 	next();
});

app.use('/api', apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server Connection ${port}`);
});