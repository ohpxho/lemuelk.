const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	img: String,
	desc: {
		type: String,
		required: true
	},
	repoUrl: {
		type: String,
		required: true
	},
	webUrl: String,
	keywords: [String],
	type: {
		type: Number,
		required: true,
		'default': 0
	}
});

mongoose.model('Project', projectSchema);