import { getAddressCoordinate } from "../services/mapsService.js"
import { validationResult } from "express-validator"
import { getDistanceTime } from "../services/mapsService.js"
import {getSuggestion} from "../services/mapsService.js"

export const getCoordinates = async(req,res,next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }
    
    const {address} = req.query

    try {
        const coordinates = await getAddressCoordinate(address)
        res.status(200).json(coordinates)
    } catch (error) {
        res.status(404).json({message: "Coordinates not found"})
    }
}

export const getTimeAndDistance = async(req,res,next) => {

   try {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({
            erroors: errors.array()
        })
    }

    const {origin, destination} = req.query

    const distanceTime = await getDistanceTime(origin, destination)

    return res.status(200).json(distanceTime)
   } catch (error) {
    res.status(500).json({message: "Internal Server Error"})
   }
}


export const suggestion = async(req,res,next) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            })
        }

        const {input} = req.query

        const suggestions = await getSuggestion(input)

        res.status(200).json(suggestions)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something is wrong!"})
    }
} 
