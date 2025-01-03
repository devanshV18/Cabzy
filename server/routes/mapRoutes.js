import express from "express"
const router = express.Router()
import { authUser } from "../middlewares/authMiddleware.js"
import { getCoordinates } from "../controllers/mapControllers.js"
import { query } from "express-validator"



router.get("/get-coordinates", 
    query('address').isString().isLength({ min: 3}),
    authUser, 
    getCoordinates)

export default router
