const Landings = require('../models/landings')

const getLandings = async (req, res) => {
    try{  

        let result

        if (req.query.minimum_mass) {
            result = await Landings.find({"mass": { "$gte" : req.query.minimum_mass } }, "name mass geolocation");
            if(result.length !== 0){
                res.status(200).json({status: 'success', results: result})
            } else {
                res.status(404).json({status: 'not found', message: 'any landing match with this minimum mass'})
            }
            
        } else if (req.params.routeParam === 'mass' && req.params.value) {

            result = await Landings.find({"mass": req.params.value}, "name mass geolocation");

            if(result.length !== 0){
                res.status(200).json({status: 'success', results: result})
            } else {
                res.status(404).json({status: 'not found', message: 'any landing match with this mass'})
            }
        } else if(req.params.routeParam === 'class' && req.params.value) {

            result = await Landings.find({"recclass": req.params.value}, "name recclass geolocation");

            if(result.length !== 0){
                res.status(200).json({status: 'success', results: result})
            } else {
                res.status(404).json({status: 'not found', message: 'any landing match with this class'})
            }
        } else if (req.query.from || req.query.to) { 

            if (req.query.from && req.query.to) {
                result = await Landings.find({ "year": { $gte: req.query.from, $lte: (req.query.to+1) } }, "name mass year geolocation")
            } else if (req.query.from) {
                result = await Landings.find({"year": { $gte: req.query.from } }, "name mass year geolocation")
            } else if (req.query.to) {
                result = await Landings.find({"year": { $lte: (req.query.to+1) } }, "name mass year geolocation")
            }
        
            if(result.length !== 0){
                res.status(200).json({status: 'success', results: result})
            } else {
                res.status(404).json({status: 'not found', message: 'any landing match with this year range'})
            }

        } else {
            res.status(404).json({status: 'not found', message: 'any landing match with this class'})
        }
    } 
    catch(err){
        res.status(400).json({status: 'error', message: err})
    } 
} 

const landings = {
    getLandings
}

module.exports = landings;