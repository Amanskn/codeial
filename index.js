const express=require("express");
const cookieParser=require('cookie-parser');
const app=express();
// default port:- 80 for http and 443 for https
const port=5000;

// this is to require the layout library
const expressLayouts=require('express-ejs-layouts');

const db=require('./config/mongoose');

app.use(express.urlencoded());
app.use(cookieParser());



// setting up static files access
app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// use express router
app.use("/",require("./routes"))

// this is to set the view engine
app.set("view engine","ejs");
app.set("views","./views");

app.listen(port,function(err){
    if(err){
        // console.log("Error in running the server:",err);
        // This is another way to print statements using acute symbol `
        // This is called Interpolation
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port no: ${port}`);
})