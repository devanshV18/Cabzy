import { rideModel } from "../models/rideModel.js";
import { getDistanceTime } from "./mapsService.js";


export const getFare = async(pickup, destination) => {
    try {
        if(!pickup | !destination){
            throw new Error('Pickup and destination are required')
        }
    
        const distanceTime = await getDistanceTime(pickup, destination)
    
        const baseFare = {
            auto: 30,
            car: 50,
            motorcycle: 20
        }
    
        const perKmRate = {
            auto: 10,
            car: 15,
            motorcycle: 8
        }
    
        const perMinuteRate = {
            auto: 2,
            car: 3,
            motorcycle: 1.5
        }
    
        console.log(distanceTime)
    
        const fare = {
            auto: Math.round(baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRate.auto)),
            car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRate.car)),
            motorcycle: Math.round(baseFare.moto + ((distanceTime.distance.value / 1000) * perKmRate.moto) + ((distanceTime.duration.value / 60) * perMinuteRate.moto))
        };
    
        return fare
    } catch (error) {
        console.log(error)
        throw error
    }
}

//needs - userid, pickup, destination and vehicleType
export const createRide = async ({ user, pickup, destination, vehicleType }) => {
    try {
        // Validate required fields
        if (!user || !pickup || !destination || !vehicleType) {
            throw new Error("All fields are necessary");
        }

        // Calculate fare
        const fare = await getFare(pickup, destination);

        // Create the ride
        const ride = await rideModel.create({
            user,
            pickup,
            destination,
            fare: fare[vehicleType],
        });

        return ride;
    } catch (error) {
        // Log the error and rethrow it for further handling
        console.error("Error in createRide:", error.message);
        throw error;
    }
};
