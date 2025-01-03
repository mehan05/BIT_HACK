import express from "express";
import { z } from 'zod';
import jwt from 'jsonwebtoken';
import {User}  from "../models/model.js";
import { loginSchema } from "../validationSchema/loginSchema.js";

export const Loginrouter = express.Router();

Loginrouter.post("/", async(req, res) => { 
    const body = req.body;
    const ValdationRes = loginSchema.safeParse(body); 
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


