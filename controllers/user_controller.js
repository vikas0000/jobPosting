const User = require('../models/user');

module.exports.profile = function(req, res){
    
    User.findById(req.params.id, function(err, user) {
        return res.render('user_profile', {
            title: "User Profile",
            profile_user: user
        });
    });
    
}




module.exports.signIn = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in', {
        title: "Sign In"
    });
}

module.exports.signUp = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_up', {
        title: "Sign Up"
    });
}

module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        // req.flash('error', 'Passwords do not match');
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            // req.flash('error', err);
            return; 
        }
        if(!user){
            User.create(req.body, function(err, user){
                if(err){
                    // req.flash('error', err);
                    return; 
                }
                return res.redirect('/users/sign-in');
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