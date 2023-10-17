require('dotenv').config();

const mongoose = require('mongoose');

const  connecttodb = async () => {
    mongoose.connect (process.env.mongourl)
    .then(() =>{
        console.log("db connceted");
    })
    .catch((err) =>{
        console.log(err);
    })
};


module.exports = connecttodb;