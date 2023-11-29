//const { default: mongoose } = require("mongoose") LO PUSO AUTOMATICAMENTE EL EDITOR

const mongoose = require("mongoose");

//MONGO DB SCHEMA

const userSchema = mongoose.Schema({
    fullName: {type: String, required: true},               //ESTO VA  A HACER QUE SI OMITO EL CAMPO NAME ME VA A TIRAR UN ERR Y NO ME VA A DEJAR SEGUIR
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},    // TRUE  es que el campo va a ser requerido, FALSE puede omitir UNIQUE DEBE SER UNICO
    profilePic: {type: String, default: ""},    // SIGNIFICA QUE PUEDE ESTAR VACIA PIC ES CARGA DE ARCHIVOS IMAGENES
    password: {type: String, required: true},
   // created : {type: Date, required: true},
},
    {
      timestamps: true, //AGREGA LOS CAMPOS CREATED AT Y UPDATE AT AGREGA CAMPO CUANDO FUE CREADO Y CUANDO FUE ACTUALIZADO

    }
);

userSchema.set("toJSON", {
  transform(doc, ret) {
    delete ret._v;
    delete ret.password;

  }
});

// MONGO DB MODEL ESTO ME VA A PERMITIR INTERACTUAR CON LOS DATOS ESTE MODELO VA A ESTAR BASADO EN EL SCHEMA

const User = mongoose.model("User", userSchema); //esto va en singular CONST USER porque a nivel atomico es 1 documento
module.exports = User;