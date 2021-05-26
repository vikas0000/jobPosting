const express = require('express');
const router = express.Router();
const passport = require('passport');
const recruiterController = require('../controllers/recruiter_controller');


router.get('/profile/:id', passport.checkAuthentication,recruiterController.profile);
router.get('/sign-up', recruiterController.signUp);
router.get('/sign-in', recruiterController.signIn);
router.post('/create', recruiterController.create);
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/recruiters/sign-in'},
    ), recruiterController.createSession);

router.get('/sign-out', recruiterController.destroySession);

module.exports = router;