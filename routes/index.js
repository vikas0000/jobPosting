const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/posts', require('./recruiter_posts'));
router.use('/recruiters', require('./recruiters'));

module.exports = router;