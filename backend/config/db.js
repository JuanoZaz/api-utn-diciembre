// const log = require("console");
const mongoose = require("mongoose");

// A PARTIR DE VERSION 6 DE MONGOOSE NO ES NECESARIO

const options = {
    maxPoolSize: 100,
    userNewUrlOarser: true,
    userUnifiedTopology: true
};
exports.options = options;

// MONGO ATLAS CLOUD ( NUBE ) CONNECTION


const db_uri = process.env.db_uri;
exports.db_uri = db_uri;
console.log(db_uri);
mongoose.set('strictQuery', false);

const mongoose = require("mongoose");
const { db_uri, options } = require("./db");

mongoose.connect(db_uri, options, (err) => {
    err ? console.log(`No puedo conectar a Mongo Atlas: ${err.message}`) :
        console.log('Mongo Atlas conectado OK');
});