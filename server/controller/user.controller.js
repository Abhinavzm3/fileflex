import {User} from '../model/user.model.js';

import bcrypt from 'bcrypt.js';

import express , {Router} from 'express'

import jwt from 'jsonwebtoken'

import {v4 as uuidv4} from 'uuid'

const Id=()=>{
    return uuidv4()
}

const register=async()=>{
    const {fullname,email,password}=req.body;

    try {
         if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All are required." });
    }

    const user=await User.findOne({email});
    if (user) {
        return res.status(400).json({ message: "Return correct details" });

    }

     const cleanedFullname = fullname.trim().replace(/\s+/g, '');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    const username = `${cleanedFullname.substring(0, 4).toLowerCase()}${generateUniqueId().substring(0, 5)}`;


    const pic=Math.floor(Math.random()*100)+1;
    const profilePic=`https://avatar.iran.liara.run/public/${pic}`


    const hashedPassword=await bcrypt.hash(password,10);
    const newUser=new User({
        fullname,
        email,
        password:hashedPassword,
        username,
    })

    } catch (error) {

         console.error("Error during registration:", error);
    return res.status(500).json({ message: "Error during registration" });
        
    }
}


//log out


const logOutUser=async()=>{

    try {

        res.clearCookie("token");
        res.status(200).json({message:"log out success"})
        
    } catch (error) {

        console.error("Error during logout:", error);
    res.status(500).json({ message: "Error during logout" });
        
    }
}


const getUserById=async(req,res)=>{
    const {userId}=req.params;
    try{

        const user=await User.findById({userId});
        if(!user){
         return   res.status(400).json({message:"user not exist"})


        }

        else return res.status(200).json({user});

    }catch{

    }
}

