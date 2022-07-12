const mongoose = require('mongoose');
const AboutMe = mongoose.model('AboutMe');

const getAbout = (req, res) => {
	AboutMe
	 .findById(req.params.aboutid)
	 .exec((err, about) => {
	 	if(err) return res.status(400).json(err);
	 	if(about) return res.status(200).json(about);
	 	return res.status(400).json('Oops, some error...');
	 });
}

module.exports = {
	getAbout
};