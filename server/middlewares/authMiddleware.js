import { userModel } from '../models/userModel.js';
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"




export const authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    //if no token means not authorised
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decoded._id)

        next();

    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized or Token Error', err });
    }
}