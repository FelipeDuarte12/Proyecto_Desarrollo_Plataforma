const express = require('express');
const router = express.Router();
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "S3dd9a3aa!",
  database: "base8"
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

module.exports = router;