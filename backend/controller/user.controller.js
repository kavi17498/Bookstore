import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signUp = async (req, res) => {
    try {
        const { FullName, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            return res.status(400).json({ message: "User Already Exists" });
        }
        const hashPassword= await bcryptjs.hash(password,10);
        const createdUser = new User({
            FullName:FullName,
            email:email,
            password:hashPassword,
        });
        
        await createdUser.save();
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            },});
        
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export const login = async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password,user.password)
        if(!user|| !isMatch){
            return res.status(400).json({message:"Invalid username or password"});
        }else{
            res.status(200).json({message:"Login Successfull",user:{
                _id:user._id,
                FullName:user.FullName,
                email:user.email
            }})

        }
    } catch (error) {

        console.log("Error"+error.message)
        res.status(500).json({message:"Internal Server error"})
    
    }

}