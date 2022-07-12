const mongoose = require('mongoose');
const Skill = mongoose.model('Skill');

const getSkills = (req, res) => {
	Skill
	 .find({})
	 .exec((err, skills) => {
	 	if(err) return res.status(400).json(err);
		if(skills && skills.length > 0) return res.status(200).json(skills);
		return res.status(400).json('No skills available');
	 });
};

module.exports = {
	getSkills
};