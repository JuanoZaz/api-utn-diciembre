const router = require("express").Router();  // ACA SE HABLA DEL ENRUTADOR

//VAMOS POR LOS METODOS

router.get('/', (req, res) => {
     res.send(`<h2>estamos en el enrutador de ${req.baseUrl}`); // PROBAR EL METODO PARA VER EN LA WEB LOCALHOST:3030/API/USERS
});

// server.post('/api/teams', (req, res) => {
//      res.send("agregamos un equipo");  TODO ESTO SE VA A MANEJAR DESDE OTRO LADO! CREO QUE USERS
//    // res.sendStatus(200);
// });

router.delete("/:id", (req, res) => {
//      console.log(req.params);
     res.send(`<h2> estamos en el enrutador de ${req.baseUrl}. Vamos a borrar el resource id: ${req.params.id}`);
});
//     res.send("eliminamos un equipo " + req.params.id);
//    // res.sendStatus(200);
// });

module.exports = router;
