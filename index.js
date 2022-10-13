'use strict'

const mongoose = require('mongoose');
const Location = require('./import-data');
const filmLocations = require('./lieux-de-tournage-a-paris.json')
require('dotenv').config();

mongoose.connect(process.env.URI, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(async ()=>{
        console.log('Successful connection to database');        
        //const dataImport = await ImportFile();
        mongoose.connection.close();
    })
    .catch(err =>{
        console.error('Connection error', err);
        mongoose.connection.close();
        process.exit();
    });

async function ImportFile() {
    let imported =  []
    filmLocations.forEach(async (element) =>  {
        const {type_tournage,nom_producteur,date_fin,nom_tournage,ardt_lieu,geo_shape,id_lieu,nom_realisateur,adresse_lieu,date_debut,annee_tournage} = element.fields;
        const ref_date_fin = new Date(date_fin)
        const ref_date_debut = new Date(date_debut)
        const newEle = new Location({filmType: type_tournage,filmProducerName: nom_producteur,endDate:ref_date_fin,filmName:nom_tournage,district:ardt_lieu,geolocalisation:geo_shape,sourceLocationId:id_lieu,filmDirectorName:nom_realisateur,address:adresse_lieu,startDate:ref_date_debut,year:annee_tournage})
        imported.push(newEle);
    });

    let res = Location.insertMany(imported).then((res)=>{
        console.log("All documents inserted successfully.")
    }).catch((err)=>{
        console.error(err)
        console.log("Couldn't write all the documents to the database. Some data may be missing")
    })
    return res;
}