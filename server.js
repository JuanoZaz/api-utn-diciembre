// require("dotenv").config();
// require("./config/db");
const express = require('express');

const PORT = process.env.PORT || 3030;
const server = express();

server.get('/api/teams', (req, res) => {
     res.send("accedimos a los equipos");
    // res.sendStatus(200);
});

server.post('/api/teams', (req, res) => {
     res.send("agregamos un equipo");
   // res.sendStatus(200);
});

server.delete('/api/teams/:id', (req, res) => {
    // console.log(req.params);
    // res.send(req.params);
    res.send("eliminamos un equipo " + req.params.id);
   // res.sendStatus(200);
});

server.use(express.static('public'));

server.listen(PORT, (err) => {
    
   !err?

       console.log(`server up: http://localhost:${PORT}`)
       :
       console.log(`server down du to: ${err}`);
});