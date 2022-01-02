const Neas = require('../models/neas')
const {filterByDateRange, filterByOrbitalClass} = require('../utils/neasFilters')

const getNeas = async (req, res) => {
    let result
    try {

        result = await Neas.find({}, "designation period_yr orbit_class discovery_date")

        if(req.query.class) result = filterByOrbitalClass(result, req.query.class)
        if(req.query.from || req.query.to) result = filterByDateRange(result, req.query.from, req.query.to)

        result.length !== 0
            ? res.status(200).json({status: 'success', results: result})
            : res.status(404).json({status: 'not found', results: result, message: 'no nea match with these specs'})
        
    } catch (err) {
        res.status(400).json({status: 'error', message: err})
    }
}

const neas = {
    getNeas
}

module.exports = neas;