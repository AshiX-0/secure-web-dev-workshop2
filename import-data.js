require('dotenv').config();
const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    filmType:{
        type: String,
        //required:true
    },
    filmProducerName:{
        type: String,
        //required:true
    },
    endDate:{
        type:Date,
        //required:true
    },
    filmName:{
        type:String,
        //required:true
    },
    district:{
        type:String,
        //required:true
    },
    geolocalisation:{
        type:{
            type:String,
            enum:['Point'],
            //required:true
        },
        coordinates:{
            type:[Number],
            required:true
        }
    },
    sourceLocationId:{
        type:String,
        //required:true
    },
    filmDirectorName:{
        type:String,
        //required:true
    },
    address:{
        type:String,
        //required:true
    },
    startDate:{
        type:Date,
        //required:true
    },
    year:{
        type:Number,
        //required:true
    },
});

const Location = mongoose.model('Location',LocationSchema);
module.exports = Location;