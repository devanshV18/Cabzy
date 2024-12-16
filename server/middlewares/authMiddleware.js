import { userModel } from '../models/userModel.js';
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { blacklistTokenModel } from '../models/blackListTokenModel.js';
import { captainModel } from '../models/captainModel.js';




export const authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

    //if no token means not authorised
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    //checking for logout
    const isBlacklisted = await blacklistTokenModel.findOne({token: token})

    if(isBlacklisted){
        return res.status(401).json({
            message: "Unauthorised"
        })
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decoded._id)

        next();

    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized or Token Error', err });
    }
}


export const authCaptain = async(req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];


    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });



    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorised (logged out)' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain;

        next()
    } catch (err) {
        console.log(err);

        res.status(401).json({ message: 'Unauthorized/Token Error' });
    }
}
