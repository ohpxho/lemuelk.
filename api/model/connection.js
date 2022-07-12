const mongoose = require('mongoose');

const dbURL = 'mongodb+srv://ohpxho:mZmoBoCYWlemitEh@cluster0.aa6efjp.mongodb.net/lemuelk?retryWrites=true&w=majority';

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('conneted', () => {
	console.log(`Connected to: ${dbURL}`);
});

mongoose.connection.on('error', () => {
	console.log(`connection failed`);
});

mongoose.connection.on('disconnected', () => {
	console.log(`mongoose disconnected`);
});

require('./project');
require('./aboutme');
require('./skill');