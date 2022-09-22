const mongoose = require('mongoose');
const {Location} = require('./import-data');
require('dotenv').config();

mongoose.connect(process.env.URI, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log('Successful connection to database');

    })
    .catch(err =>{
        console.error('Connection error', err);
        process.exit();
    });





mongoose.connection.close();
