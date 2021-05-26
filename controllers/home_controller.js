const RecruiterPost = require('../models/recruiter_post');
const Recruiter = require('../models/recruiter');



module.exports.home = async function(req, res){

    try{
        // CHANGE :: populate the likes of each post and comment
        let posts = await RecruiterPost.find({})
        .sort('-createdAt')
        .populate('user')

        let recruiters = await Recruiter.find({});

        return res.render('home', {
            title: "Home",
            posts:  posts,
            all_users: recruiters
        });

    }catch(err){
        console.log('Error', err);
        return;
    }
   
}

