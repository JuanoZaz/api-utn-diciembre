// importamos el modelo

const User = require("./usersMd");   //importacion

//GET ALL USERS

const getAllUsers = (req, res) => {    
    User.find().then((data)=> {
        !data.length ? res.json({message: "not found" }).status(404) : res.json(data).status(200); //TRABAJAMOS CON JAVASCRIPT PARA QUE EN LA COMPROBACION DEVUELVA ALGO, UN MENSAJE Y SI SOMOS CONSISTENTES UN STATUS
        res.json(data);
    }).catch((error) => console.log(error)); // COMPROBACION DE ERROR BASICA, MANEJO DE ERRORES
    
    //res.send(`<h2>estamos en el enrutador de ${req.baseUrl}`)  //ESTO ES UNA FUNCION PUEDE SER CON FUNCION FLECHA O CON UNA FUNCION COMUN
};

// CREATE USER aca ingresa los datos que mandan desde el front end

 const createUser = async (req, res)=> {
         console.log(req.body); //para probar
     const { fullname, userName, email, profilePic, password } = req.body;

    //send to database, enviar datos a la base de datos

    const newUser = new User(req.body);  // esto es todo lo que esta dentro del body name, password, etc
    newUser.save((error, result) => {
         console.log(result);
        if (error) {
            res.status(500).json({ message: "no puedo crear "}); // probamos si podemos crear un recurso POSTMAN
        }   else {
            res.status(200).json(newUser); //!+++++++++++ NO FUNCIONO !+++++++++++++++++++++++++++++++//
        }
    });
};
// DLETE USER BY ID

const deleteUserById = (req, res) => {
    res.send(`<h2> estamos en el enrutador de ${req.baseUrl}. Vamos a borrar el resource id: ${req.params.id}`);
};

module.exports = { getAllUsers, deleteUserById, createUser };