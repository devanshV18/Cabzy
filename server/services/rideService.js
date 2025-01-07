import { rideModel } from "../models/rideModel.js";
import { getDistanceTime } from "./mapsService.js";
import crypto from "crypto"


export const getFare = async (pickup, destination) => {
    try {
        if (!pickup || !destination) {
            throw new Error('Pickup and destination are required');
        }

        const distanceTime = await getDistanceTime(pickup, destination);

        if (!distanceTime || !distanceTime.distance || !distanceTime.duration) {
            throw new Error('Invalid distance or duration data from Google Maps API');
        }

        const baseFare = {
            auto: 30,
            car: 50,
            motorcycle: 20,
        };

        const perKmRate = {
            auto: 10,
            car: 15,
            motorcycle: 8,
        };

        const perMinuteRate = {
            auto: 2,
            car: 3,
            motorcycle: 1,
        };

        const fare = {
            auto: Math.round(
                baseFare.auto +
                (distanceTime.distance.value / 1000) * perKmRate.auto +
                (distanceTime.duration.value / 60) * perMinuteRate.auto
            ),
            car: Math.round(
                baseFare.car +
                (distanceTime.distance.value / 1000) * perKmRate.car +
                (distanceTime.duration.value / 60) * perMinuteRate.car
            ),
            motorcycle: Math.round(
                baseFare.motorcycle +
                (distanceTime.distance.value / 1000) * perKmRate.motorcycle +
                (distanceTime.duration.value / 60) * perMinuteRate.motorcycle
            ),
        };

        return fare;
    } catch (error) {
        // console.error('Error calculating fare:', error.message);
        throw new Error('Failed to calculate fare. Please try again later.');
    }
};


//needs - userid, pickup, destination and vehicleType
export const createRide = async ({ user, pickup, destination, vehicleType }) => {
    try {
        // Validate required fields
        if (!user || !pickup || !destination || !vehicleType) {
            throw new Error("All fields are necessary");
        }

        console.log("log2", vehicleType)


        // Calculate fare
        const fare = await getFare(pickup, destination);
      

        console.log(fare)

        // Create the ride
        const ride = await rideModel.create({
            user,
            pickup,
            destination,
            fare: fare[vehicleType],
            otp: getOtp(6)
        });

        return ride;
    } catch (error) {
        // Log the error and rethrow it for further handling
        console.error("Error in createRide:", error.message);
        throw error;
    }
};

function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}

