const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
	logo: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true	
	}
});

mongoose.model('Skill', skillSchema);