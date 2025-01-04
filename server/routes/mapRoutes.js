import express from "express"
const router = express.Router()
import { authUser } from "../middlewares/authMiddleware.js"
import { getCoordinates, getTimeAndDistance, suggestion } from "../controllers/mapControllers.js"
import { query } from "express-validator"



router.get("/get-coordinates", 
    query('address').isString().isLength({ min: 3}),
    authUser, 
    getCoordinates)

router.get("/get-distance-time", 
    query('origin').isString().isLength({ min: 3 }),
    query('destination').isString().isLength({ min: 3 }),
    authUser,
    getTimeAndDistance
)

router.get("/get-suggestions", 
    query('input').isString().isLength({ min: 3}),
    authUser,
    suggestion
)

export default router
