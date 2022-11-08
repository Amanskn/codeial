const express=require("express");
const router=express.Router();
const homeController=require("../controllers/home_controller");
// This is just to check that router is loaded
console.log("Router loaded");

router.get("/",homeController.home);


router.use("/users",require("./users"));
router.use('/posts',require('./posts'));


// for any further routes, access in the way
// router.use("/routerName",require("./routerFile"));
module.exports=router;