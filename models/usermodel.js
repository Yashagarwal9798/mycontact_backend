const mongoose = require("mongoose");
const userschema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter name"],
    },
    email:{
        type:String,
        required:[true,"please enter email"],
        unique:[true,"please enter a valid email"],
    },
    password:{
        type:String,
        required:[true,"please enter password"],
    },
},{
    timestamps:true
});
module.exports = mongoose.model("User",userschema);