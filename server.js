// require("dotenv").config();
const express = require('express'); 
require("./backend/config/db.js");

// import express from "express";
// import "./backend/config/db.js";

const PORT = process.env.PORT || 3030;
const server = express();

// server.get('/api/teams', (req, res) => {
//      res.send("accedimos a los equipos");
//     // res.sendStatus(200);
// });

// server.post('/api/teams', (req, res) => {
//      res.send("agregamos un equipo");  TODO ESTO SE VA A MANEJAR DESDE OTRO LADO! CREO QUE USERS
//    // res.sendStatus(200);
// });

// server.delete('/api/teams/:id', (req, res) => {
//      console.log(req.params);
//     res.send(req.params);
//     res.send("eliminamos un equipo " + req.params.id);
//    // res.sendStatus(200);
// });


//  express core MIDDLeWARES en medio de
server.use(express.static('public'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// LLAMAR A LAS RUTAS DE USUARIOS users routing

server.use("/api/users", require("./backend/users/usersRt.js")); // RUTA DE LOS USUARIOS
// esto de arriba es una declaracion nada mas /api/users

server.listen(PORT, (err) => {
    
   !err ?

       console.log(`Server up: http://localhost:${PORT}`)
       :
       console.log(`Server down du to: ${err}`);
});