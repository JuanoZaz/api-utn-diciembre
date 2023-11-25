// require("dotenv").config();
require("./backend/config/db.js");
 const express = require('express'); 

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

// LLAMAR A LAS RUTAS DE USUARIOS users routing

server.use("/api/users", require("./backend/users/userRt.js")); // RUTA DE LOS USUARIOS
// esto de arriba es una declaracion nada mas /api/users


server.use(express.static('public'));

server.listen(PORT, (err) => {
    
   !err?

       console.log(`server up: http://localhost:${PORT}`)
       :
       console.log(`server down du to: ${err}`);
});