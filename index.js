const express=require("express");
const app=express();
// default port:- 80 for http and 443 for https
const port=5000;

// use express router
app.use("/",require("./routes"))




app.listen(port,function(err){
    if(err){
        // console.log("Error in running the server:",err);
        // This is another way to print statements using acute symbol `
        // This is called Interpolation
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port no: ${port}`);
})