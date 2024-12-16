import { userModel } from "../models/userModel.js";
import { createUser } from "../services/userService.js";
import { validationResult } from "express-validator";

export const registerUser = async (req,res,next) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }

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
        user,
        token
    })
}