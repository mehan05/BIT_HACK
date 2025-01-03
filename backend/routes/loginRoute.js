const express = require("express");
const Loginrouter  = express.Router();
const express = require("express");
const {z} = require('zod');
const jwt = require('jsonwebtoken')
const { User } = require("../models/model");

Loginrouter.post("/", async(req, res) => { 
    const body = req.body;
    const ValdationRes = z.safeParse(body); 
    try {
            if(ValdationRes.success){
                const {roll_no,name,email,isAdmin} = ValdationRes.data;

                const token = jwt.sign({roll_no,email,isAdmin},process.env.JWT_SECRET_KEY);

                const user = await User.create({roll_no,name,email,isAdmin});

                await user.save();

                return res.status(200).json({msg:"User Created",data:user,token})
            }
            return res.status(400).json({msg:"Invalid Data"})
    } catch (error) {
        return res.status(500).json({msg:"Server Error",error})
    }
})


module.exports = Loginrouter