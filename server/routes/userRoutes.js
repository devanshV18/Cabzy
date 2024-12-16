import express from "express"
const router = express.Router()
import { body } from "express-validator"
import { registerUser } from "../controllers/userController.js"


//register
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname').isLength({min:3}).withMessage('First Name must be atleast 3 cahracters long!'),
    body('password').isLength({min:6}).withMessage('Password must contain atleast 6 characters.')
],registerUser)


export default router