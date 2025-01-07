import { validationResult } from "express-validator";
import {createRide, getFare} from "../services/rideService.js";


export const createARide = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, pickup, destination, vehicleType } = req.body;

    console.log("log1", vehicleType)

    try {
        const ride = await createRide({ user: req.user._id, pickup, destination, vehicleType });
        return res.status(201).json({
            message: "Ride created successfully",
            ride,
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const getRideFare = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;

    try {
        const fare = await getFare(pickup, destination);
        return res.status(200).json(fare);
    } catch (error) {
        // console.error('Get fare error:', error.message);
        return res.status(500).json({ message: error.message });
    }
};
