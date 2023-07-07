const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "base8"
});

// Conexion a la base de datos

connection.connect(function(error){

    if (error) throw error

    else console.log("La conexion a la base de datos fue exitosa")

})


app.post('/login',(req, res) =>{
    const sql = "SELECT * FROM usuario WHERE correo = ? AND contraseña = ?";
    connection.query(sql, [req.body.email,req.body.password], (err, data) => {
        if(err) return res.json("El email o la contraseña son incorrectos");
        if(data.length > 0){
            
            return res.json("Inicio de sesion correcto");
            
        }else{
            return res.json("El email o la contraseña son incorrectos")
        }
    });
});



// Fijamos los puertos 

app.listen(8081, () => {

    console.log("Conectado...")
});
