const User = require("../models/user");

module.exports.profile=function(req,res){
    // return res.end("<h1>You are on User's profile</h1>");
    return res.render("user_profile",{
        title:"userProfile"
    })
}


// Setting up another action
module.exports.education=function(req,res){
    return res.end("<h1><i>This is the education page</i></h1>");
}


// setting action for signUp
module.exports.signUp=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up',{
        title:"Codeial | Sign Up"
    })
}

// setting action for signIn
module.exports.signIn=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_in',{
        title:"Codeial | Sign In"
    })
}


// get the Sign Up data
module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log("Error in finding user while signing up ");
            return;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log("Error in creating user while signing up");
                    return;
                }
                return res.redirect("/users/sign-in");
            })           
        }
        else{
            return res.redirect('back');

        }
    });
}

// validating the sign in details by creating a session
module.exports.createSession=function(req,res){
    return res.redirect('/');
}


module.exports.destroySession=function(req,res){
    
    // This is the older version of code
    // req.logout();
    // return res.redirect('/');

    // This is the newer version of code
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
}