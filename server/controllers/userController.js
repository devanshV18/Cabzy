import { userModel } from "../models/userModel.js";
import { createUser } from "../services/userService.js";
import { validationResult } from "express-validator";
import { blacklistTokenModel } from "../models/blackListTokenModel.js";

export const registerUser = async (req,res,next) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }

    try {
    const {fullname, email, password} = req.body

    const isUserAlready = await userModel.findOne({ email });

    if (isUserAlready) {
        return res.status(400).json({ message: 'User already exist' });
    }

    const hashedPassword = await userModel.hashPassword(password)

    //the user variable below resolves the promise of the function createUser which creates the user doc in our db
    const user = await createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email, 
        password: hashedPassword
    })

    const token = user.generateAuthToken()

    res.status(201).json({
        message: "User Registered!",
        user,
        token
    })
    } catch (error) {
      return res.status(500).json({
        message: "Something went wrong"
      })  
    }
}

export const loginUser = async (req,res,next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }

    try {
        const {email, password} = req.body

    const user = await userModel.findOne({email}).select('+password')

    if(!user){
        return res.status(401).json({
            message: "The email is either invalid or not registered."
        })
    }

    const isMatch = await user.comparePassword(password)

    if(!isMatch){
        return res.status(401).json({
            message: "Incorrect Password."
        })
    }

    const token = user.generateAuthToken()

    res.cookie('token', token)

    res.status(200).json({
        message: "User Logged In !",
        user,
        token
    })
    } catch (error) {
      return res.status(400).json({
        message: "Something went wrong ! Please try again."
      })  
    }
}

export const getUserProfile = async(req,res,next) => {
    res.status(200).json({
        userData: req.user
    })
}

export const logoutUser = async(req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    await blacklistTokenModel.create({token})

    res.clearCookie('token')

    res.status(200).json({
        message: "User Logged Out"
    })
}

export const test = async(req,res,next) => {
    res.status(200).json({
        message: "works well"
    })
}