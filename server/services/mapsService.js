import axios from 'axios';

export const getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                latitude: location.lat,
                longitude: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error occurred while fetching coordinates');
    }
};

export const getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            if(response.data.rows[0].elements[0].status === 'ZERO_RESULTS'){
                throw new Error('No results found');
            }
            return response.data.rows[0].elements[0]
        } else {
            throw new Error('Unable to fetch distance and time');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error occurred while fetching distance and time');
    }
}


export const getSuggestion = async(input) => {
    if(!input){
        throw new Error("Query is not defined")
    }

    const apikey = process.env.GOOGLE_MAPS_API

    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apikey}`

    try {
        const response = await axios.get(url)
        if(response.data.status === 'OK'){
            return response.data.predictions
        }else{
            throw new Error("Unable to fetch suggestions")
        }
    } catch (error) {
       throw error 
    }
}