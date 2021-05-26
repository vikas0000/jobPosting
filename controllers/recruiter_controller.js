const Recruiter = require('../models/recruiter');

module.exports.profile = function(req, res){
    
    Recruiter.findById(req.params.id, function(err, recruiter) {
        return res.render('recruiter_profile', {
            title: "recruiter Profile",
            profile_recruiter: recruiter
        });
    });
    
}




module.exports.signIn = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/recruiters/profile');
    }
    return res.render('recruiter_sign_in', {
        title: "Sign In"
    });
}

module.exports.signUp = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/recruiters/profile');
    }
    return res.render('recruiter_sign_up', {
        title: "Sign Up"
    });
}

module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        // req.flash('error', 'Passwords do not match');
        return res.redirect('back');
    }
    Recruiter.findOne({email: req.body.email}, function(err, recruiter){
        if(err){
            // req.flash('error', err);
            return; 
        }
        if(!recruiter){
            Recruiter.create(req.body, function(err, recruiter){
                if(err){
                    // req.flash('error', err);
                    return; 
                }
                return res.redirect('/recruiters/sign-in');
            });
        }else{
            // req.flash('success', 'You have signed up, login to continue!');
            return res.redirect('back')
        }
    });
}

module.exports.createSession = function(req, res){
    // req.flash('success', 'Logged In Successfully');
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    req.logout();
    // req.flash('success', 'You have logged out!');


    return res.redirect('/');
}