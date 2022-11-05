const express=require("express");
const router=express.Router();

const usersController=require("../controllers/users_controller");
router.get("/profile",usersController.profile);
router.get("/education",usersController.education);

// setting router for sign in and sign up
router.get("/sign-up",usersController.signUp);
router.get("/sign-in",usersController.signIn);

module.exports=router;