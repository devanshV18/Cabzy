import express from "express";
import { body } from "express-validator";
import { createARide } from "../controllers/rideController.js";
import { authUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post(
    "/create",
    authUser,
    body("pickup").isString().isLength({ min: 3 }).withMessage("Invalid Pickup address"),
    body("destination").isString().isLength({ min: 3 }).withMessage("Invalid Destination address"),
    body("vehicleType")
        .isString()
        .isIn(["auto", "car", "motorcycle"])
        .withMessage("Invalid Vehicle Type"),
    createARide
);

export default router;
