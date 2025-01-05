import { captainModel } from "../models/captainModel.js";

export const createCaptain = async ({
    firstname, lastname, email, password, color, plate, capacity, vehicleType
}) => {
    try {
        // Validate required fields
        if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
            throw new Error('All fields are required');
        }

        // Create the captain record in the database
        const captain = await captainModel.create({
            fullname: {
                firstname,
                lastname
            },
            email,
            password,
            vehicle: {
                color,
                plate,
                capacity,
                vehicleType
            }
        });

        return captain;
    } catch (error) {
        // Log the error and rethrow it to be handled further up
        console.error("Error creating captain:", error.message);
        throw error; // Allows calling code to handle the error
    }
};
