module.exports.home=function(req,res){
    // let's comment the below line because it is sending response directly to the browser
    // return res.end('<h1> Express is up for Codeial!</h1>');
    return res.render("home",{
        title:"home"
    })
}