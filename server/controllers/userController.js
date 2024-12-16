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

    const {firstname, email, password} = req.body
    const hashedPassword = await userModel.hashedPassword(password)

    //the user variable below resolves the promise of the function createUser which creates the user doc in our db
    const user = await createUser({
        firstname, lastname, email, password
    })

    const token = user.generateAuthToken()

    res.status(200).json({
        user,
        token
    })
}