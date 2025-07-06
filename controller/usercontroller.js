const asynchandler = require("express-async-handler");
const User = require("../models/usermodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
//@desc register a user
//@route POST /api/user/register
//@access public
const registeruser = asynchandler(async(req,res)=>{
   const {name,email,password} = req.body;
   if(!name || !email || !password){
      res.status(400);
      throw new Error("Please fill in all fields");
   }
   const useravailable = await User.findOne({email});
   if(useravailable){
      res.status(400);
      throw new Error("already exists");
   }
   const hashpass = await bcrypt.hash(password,10);
   const user = await User.create({
      name,
      email,
      password: hashpass,
   });
   console.log({user});
   if(user){
      res.status(201).json({_id: user.id, email: user.email});
   }
   else{
      res.status(400);
      throw new Error("entered data is not varified");
   }
   console.log("hashpassword is",hashpass);
 });
//@desc login a user
//@route POST /api/user/login
//@access public
 const loginuser = asynchandler(async(req,res)=>{
   const {email,password}= req.body;
   if(!password || !email){
      res.status(400);
      throw new Error("Please fill in all fields");
   }
   const useravailable = await User.findOne({email});
   if(useravailable && (await bcrypt.compare(password,useravailable.password))){
      const accesstoken = jwt.sign({
         user:{
            name: useravailable.name,
            email: useravailable.email,
            id: useravailable.id,
         },
      },
      process.env.ACCESS_TOKEN_SCERET,
      {expiresIn: "15m"}
   );
   res.status(200).json({accesstoken})
   }
   else{
      res.status(400);
      throw new Error("invalid email or password");
   }
 });
//@desc current user
//@route GET /api/user/current
//@access private
 const currentuser = asynchandler(async(req,res)=>{
    res.json(req.user);
 });
 module.exports = {registeruser,loginuser,currentuser};