const router = require("express").Router();  // ACA SE HABLA DEL ENRUTADOR
const userCt = require("./usersCt");
//VAMOS POR LOS METODOS

router.get("/", userCt.getAllUsers);
     // (req, res) => {
     // res.send(`<h2>estamos en el enrutador de ${req.baseUrl}`); // PROBAR EL METODO PARA VER EN LA WEB LOCALHOST:3030/API/USERS
// });

// server.post('/api/teams', (req, res) => {
//      res.send("agregamos un equipo");  TODO ESTO SE VA A MANEJAR DESDE OTRO LADO! CREO QUE USERS
//    // res.sendStatus(200);
// });

//TRAEMOS PARA CREAR UN USUARIO DE EXPRESS
router.post("/", userCt.createUser);

router.delete("/:id", userCt.deleteUserById); 
//(req, res) => {
//      console.log(req.params);
    //res.send(`<h2> estamos en el enrutador de ${req.baseUrl}. Vamos a borrar el resource id: ${req.params.id}`); // PASO AL ARCHIVO CONTROLADOR USERCT
//});

//     res.send("eliminamos un equipo " + req.params.id);
//    // res.sendStatus(200);
// });

module.exports = router;
