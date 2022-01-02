const mongoose = require('mongoose');

const objectSchema = {
    name: { 
        type: String, 
        required: true 
    },
    id: { 
        type: String, 
        required: true 
    },
    nametype: { 
        type: String, 
        required: true 
    },
    recclass:{
        type: String,
        required: true 
        
    },
    mass:{
        type: Number,
        required: true 
    },
    fall:{
        type: String,
        required: true 
        
    },
    year:{
        type: String,
        required: true 
        
    },
    reclat:{
        type: String,
        required: true 
        
    },
    reclong:{
        type: String,
        required: true 
        
    },
    geolocation:{
        type: Object,
        required: true 
    }
};
// Crear el esquema
const landingsSchema = mongoose.Schema(objectSchema);
// Crear el modelo
const Landings = mongoose.model('landings', landingsSchema);

module.exports = Landings;