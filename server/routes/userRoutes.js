import express from "express"
const router = express.Router()
import { body } from "express-validator"
import { loginUser, registerUser, getUserProfile, logoutUser} from "../controllers/userController.js"
import { authUser } from "../middlewares/authMiddleware.js"


//register
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname').isLength({min:3}).withMessage('First Name must be atleast 3 cahracters long!'),
    body('password').isLength({min:6}).withMessage('Password must contain atleast 6 characters.')
],registerUser)

//login
router.post('/login', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min : 6}).withMessage("Invalid Password")
], loginUser)

//profile
router.get('/profile', authUser, getUserProfile)

router.get('/logout', authUser, logoutUser)


export default router