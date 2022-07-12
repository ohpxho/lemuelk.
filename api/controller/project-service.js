const mongoose = require('mongoose');
const Project = mongoose.model('Project');

const getProjects = (req, res) => {
	Project
	 .find({})
	 .exec((err, projects) => {
	 	if(err) return res.status(400).json("Something's gone wrong");
	 	if(projects && projects.length > 0) {
	 		return res.status(200).json(projects);;
	 	} 
	 	return res.status(400).json('');
	 });
};

module.exports = {
	getProjects
};