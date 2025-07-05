const asynchandler = require("express-async-handler")
//@desc register a user
//@route POST /api/user/register
//@access public
const registeruser = asynchandler(async(req,res)=>{
    res.json({message:"register the user"});
 });
//@desc login a user
//@route POST /api/user/login
//@access public
 const loginuser = asynchandler(async(req,res)=>{
    res.json({message:"login the user"});
 });
//@desc current user
//@route GET /api/user/current
//@access private
 const currentuser = asynchandler(async(req,res)=>{
    res.json({message:"current the user"});
 });
 module.exports = {registeruser,loginuser,currentuser};