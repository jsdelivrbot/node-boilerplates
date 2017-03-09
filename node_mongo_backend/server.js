// Script principal

// Importar librerias principales
var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Conexion a la base de datos
const DB_URI = '';
mongoose.connect(DB_URI);

// Importar rutas

// Configuracion de rutas y el parser para JSON
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());


// Pagina por defecto
app.get('/', (req, res) => {
  res.status(200).send('');
});

// Puerto para la escucha de peticiones
app.listen(process.env.PORT||3000);
