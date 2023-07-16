const mysql = require("mysql");

const express = require("express");

const cors = require("cors");

const axios = require("axios");



const app = express();

app.use(express.json());

app.use(cors());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "S3dd9a3aa!",
    database: "base8"
});

// Conexion a la base de datos

connection.connect(function(error){

    if (error) throw error

    else console.log("La conexion a la base de datos fue exitosa")

})

app.get('/pag2', (req, res) => {
    res.send('Página 2');
  });


app.post('/login',(req, res) =>{
    const sql = "SELECT * FROM usuario WHERE correo = ? AND password = ?";
    connection.query(sql, [req.body.email,req.body.password], (err, data) => {
        if(err) return res.json("El email o la contraseña son incorrectos");
        if(data.length > 0){
            
            return res.json("Inicio de sesion correcto")
            
        }else{
            return res.json("El email o la contraseña son incorrectos")
        }
    });
});

app.get('/datos', (req, res) => {
    const sql = 'SELECT Movimiento_Total_Rajo_Esperanza, Movimiento_Total_Rajos_Tesoro, Movimiento_Total_Rajo_Encuentro, Movimiento_Total_Rajo_Esperanza_Sur, Movimiento_Total_Rajo_Llano FROM mineria'; // Selecciona solo las columnas necesarias
    connection.query(sql, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json('Error al obtener los datos');
      } else {
        res.json(result);
      }
    });
  });
  


// Fijamos los puertos 

app.listen(8081, () => {

    console.log("Conectado...")
});

