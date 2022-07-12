const mongoose = require('mongoose');

const aboutmeSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	headline: {
		type: String,
		required: true
	},
	desc: {
		type: String,
		required: true
	},
	img: {
		date: Buffer,
		contentType: String
	}
});

mongoose.model('AboutMe', aboutmeSchema);