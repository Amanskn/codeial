const Post= require('../models/post');

module.exports.home=function(req,res){
    // let's comment the below line because it is sending response directly to the browser
    // return res.end('<h1> Express is up for Codeial!</h1>');


    // below two lines are cookie related stuffs
    // console.log(req.cookies);
    // res.cookie('user',4);

    // Post.find({},function(err,posts){
    //     return res.render("home",{
    //         title:"Codeial | Home",
    //         posts:posts
    //     });
    // });
    
    // Populate the user of each post
     Post.find({}).populate('user').exec(function(err,posts){
        return res.render("home",{
            title:"Codeial | Home",
            posts:posts
        });
    });
    
}