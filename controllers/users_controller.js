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
    return res.render('user_sign_up',{
        title:"Codeial | Sign Up"
    })
}

// setting action for signIn
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"Codeial | Sign In"
    })
}


// get the Sign Up data
module.exports.create=function(req,res){
    // TODO later
}

// validating the sign in details by creating a session
module.exports.createSession=function(req,res){
    // TODO later
}