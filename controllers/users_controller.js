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