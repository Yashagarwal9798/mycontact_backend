 const express = require("express");
 const router = express.Router();
 const {registeruser,loginuser,currentuser} = require("../controller/usercontroller")
 const validatetoken = require("../middleware/validateuser");
 
 router.post("/register", registeruser);


 router.post("/login", loginuser);


 router.get("/current", validatetoken , currentuser);

 module.exports= router;