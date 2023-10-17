const User = require("../models/usermodels")

exports.createuser = async (req , res) =>{
    try {
        const {name , email} = req.body

        if (!name || !email){
            throw new Error ("Name and Email Is Required")
        }

        const userExists = await User.findOne({email})

        if (userExists) {
            throw new Error ("Email is already Exists")
        }
        
        const user = await User.create({
            name,
            email
        })
        res.json({
            success : true,
            massage: "user created successfully",
            user
        })
        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}