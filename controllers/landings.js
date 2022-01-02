const Landings = require('../models/landings')
const {filterByDateRange, filterByMinimumMass} = require('../utils/landingsFilters')

const getLandingsByMass = async (req, res) => {
    const {from, to} = req.query
    let result
    try {

        req.params.value 
            ? result = await Landings.find({"mass": req.params.value}, "name mass year geolocation -_id")
            : result = []

        if(from || to) result = filterByDateRange(result, from, to)
    
        result.length !== 0
            ? res.status(200).json({status: 'success', results: result})
            : res.status(404).json({status: 'not found', results: result, message: 'no landing match with these specs'})
        
    } catch (error) {
        res.status(400).json({status: 'error', message: err})
    }
}

const getLandingsByClass = async (req, res) => {
    const {minimum_mass, from, to} = req.query
    let result
    try {

        req.params.value 
            ? result = await Landings.find({"recclass": req.params.value}, "name mass year recclass geolocation -_id")
            : result = []

        if(minimum_mass) result = filterByMinimumMass(result, minimum_mass)
        if(from || to) result = filterByDateRange(result, from, to)
    
        result.length !== 0
            ? res.status(200).json({status: 'success', results: result})
            : res.status(404).json({status: 'not found', results: result, message: 'no landing match with these specs'})
        
    } catch (error) {
        res.status(400).json({status: 'error', message: err})
    }
}

const getLandings = async (req, res) => {
    const {minimum_mass, from, to} = req.query
    let result
    try {

        result = await Landings.find({}, "name mass year recclass geolocation -_id")

        if(minimum_mass) result = filterByMinimumMass(result, minimum_mass)
        if(from || to) result = filterByDateRange(result, from, to)

        result.length !== 0
            ? res.status(200).json({status: 'success', results: result})
            : res.status(404).json({status: 'not found', results: result, message: 'no landing match with these specs'})
        
    } catch (err) {
        res.status(400).json({status: 'error', message: err})
    }
}

const landings = {
    getLandingsByMass,
    getLandingsByClass,
    getLandings
}

module.exports = landings;