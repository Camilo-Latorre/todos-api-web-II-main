// app.js

require('dotenv').config();
const express = require('express');
const routerTodos = require('./routes'); // Ajusta la ruta según tu estructura de archivos
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware a nivel de aplicación
app.use((req, res, next) => {
    console.log('Middleware de aplicación:', req.method, req.url);
    next();
});

// Configuración de vistas
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Rutas
app.use('/todospanel', routerTodos);

// Iniciar servidor
app.listen(PORT, () => {
    console.log('Servidor iniciado en http://localhost:' + PORT);
});
