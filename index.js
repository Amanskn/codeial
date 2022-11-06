const express=require("express");
const cookieParser=require('cookie-parser');
const app=express();
// default port:- 80 for http and 443 for https
const port=5000;

// this is to require the layout library
const expressLayouts=require('express-ejs-layouts');

const db=require('./config/mongoose');

// used for session cookie
const session=require("express-session");
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');


// This is the older version of code
// const MongoStore=require('connect-mongo')(session);

// This is newer version of code
const MongoStore=require('connect-mongo');

const sassMiddleware=require('node-sass-middleware');

app.use(sassMiddleware({
    src:'./assets/scss',
    dest:'./assets/css',
    debug:true,
    outputStyle:"extended",
    prefix:'/css'
}));



app.use(express.urlencoded());
app.use(cookieParser());



// setting up static files access
app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// this is to set the view engine
app.set("view engine","ejs");
app.set("views","./views");

// mongo store is used to store the session cookie in the db
app.use(session({
    name:'codeial',
    // TODO change the secret before deployment in production mode
    secret:'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie:{
        maxAge: (1000 * 60 * 100)
    },

    // This is the older version of code
    // store: new MongoStore(
    //     {
    //         mongooseConnection:db,
    //         autoRemove:'disabled'
    //     },
    //     function(err){
    //         console.log( err || 'connect-mongodb setup ok');
    //     }
    // ) 

    // This is the newer version of code
    store: MongoStore.create({
      
        mongoUrl : "mongodb://0.0.0.0:27017/social_media",
         autoremove : "disabled",
     },function(err){
         console.log("error at mongo store",err || "connection established to store cookie");
     })
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(passport.setAuthenticatedUser);

// use express router
app.use("/",require("./routes"));



app.listen(port,function(err){
    if(err){
        // console.log("Error in running the server:",err);
        // This is another way to print statements using acute symbol `
        // This is called Interpolation
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port no: ${port}`);
})