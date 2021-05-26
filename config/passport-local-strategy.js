const passport = require('passport')
const LocalStrategy = require('passport-local');
const Recruiter = require('../models/recruiter');

passport.use(new LocalStrategy({
        usernameField: 'email',
        passReqToCallback: true
    },
    function(req, email, password, done){
        Recruiter.findOne({email:email}, function(err, recruiter){
            if(err){
                // req.flash('error', err);
                console.log('error in finding user');
                return done(err);
            }
            if(!recruiter || recruiter.password != password){
                // req.flash('error', 'Invalid username/password');
                console.log('Invalid username/password');
                return done(null, false);
            }
            return done(null, recruiter);
        });
    }

));

passport.serializeUser(function(recruiter, done){
    done(null, recruiter.id);
});

passport.deserializeUser(function(id, done){
    Recruiter.findById(id, function(err, recruiter){
        if(err){
            console.log('error in finding user');
            return done(err);
        }
        return done(null, recruiter);
    });
});

passport.checkAuthentication = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/sign-in');
}
passport.setAuthenticatedUser = function(req, res, next){
    if(req.isAuthenticated()){
       res.locals.recruiter = req.recruiter;
    }
    next();
}
module.exports = passport;