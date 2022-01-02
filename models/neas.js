const mongoose = require('mongoose');

const objectSchema = {
    designation: { 
        type: String, 
        required: true 
    },
    discovery_date: { 
        type: String, 
        required: true 
    },
    h_mag: { 
        type: String, 
        required: true 
    },
    moid_au:{
        type: String,
        required: true 
        
    },
    q_au_1:{
        type: Number,
        required: true 
    },
    q_au_2:{
        type: String,
        required: true 
        
    },
    period_yr:{
        type: String,
        required: true 
        
    },
    i_deg:{
        type: String,
        required: true 
        
    },
    pha:{
        type: String,
        required: true 
        
    },
    orbit_class:{
        type: Object,
        required: true 
    }
};
// Crear el esquema
const neasSchema = mongoose.Schema(objectSchema);
// Crear el modelo
const Neas = mongoose.model('neas', neasSchema);

module.exports = Neas;