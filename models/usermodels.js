const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    email:{
        type: String,
        required:[true, "Email is required"], 
        unique: true,
    },

});





module.exports = mongoose.model("User", userschema)