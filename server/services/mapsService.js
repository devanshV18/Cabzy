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
        } 

        else {
            throw new Error('Unable to fetch coordinates');
        }

    } catch (error) {
        console.error(error);
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
            const element = response.data.rows[0].elements[0];

            if (element.status === 'ZERO_RESULTS') {
                throw new Error('No route found between the origin and destination');
            }

            return element; // Contains `distance` and `duration`
        } else {
            throw new Error(`Google Maps API error: ${response.data.status}`);
        }
    } catch (error) {
        console.error('Error occurred while fetching distance and time:', error.message);
        throw new Error('Failed to fetch distance and time from Google Maps API');
    }
};



export const getSuggestion = async (input) => {
    // Ensure the input is defined
    if (!input) {
        throw new Error("Query is not defined");
    }

    const apikey = process.env.GOOGLE_MAPS_API;

    // Build the URL with the input and API key
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apikey}`;

    try {
        // Making the API request
        const response = await axios.get(url);

        // Check if the API response status is 'OK'
        if (response.data.status === 'OK') {
            return response.data.predictions;
        } else {
            throw new Error("Unable to fetch suggestions");
        }
    } catch (error) {
        // Enhanced error handling
        if (error.response) {
            // If the error is due to a response from the API
            throw new Error(`API Error: ${error.response.status} - ${error.response.statusText}`);
        } else if (error.request) {
            // If the request was made but no response was received
            throw new Error("No response received from the API");
        } else {
            // If the error is related to setting up the request
            throw new Error(`Request Error: ${error.message}`);
        }
    }
};
