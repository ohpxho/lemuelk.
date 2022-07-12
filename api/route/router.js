const express = require('express');
const router = express.Router();
const ctrlProject = require('../controller/project-service');
const ctrlAboutme = require('../controller/aboutme-service');
const ctrlSkill = require('../controller/skill-service');

router
 .route('/projects')
 .get(ctrlProject.getProjects);

router
 .route('/about/:aboutid')
 .get(ctrlAboutme.getAbout);

router
 .route('/skills')
 .get(ctrlSkill.getSkills);

module.exports = router;