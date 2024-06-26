// En todos.router.js
const express = require('express');
const router = express.Router();
const todoModel = require('../src/models/todoModel');

// Index - Mostrar todas las tareas
router.get('/', async (req, res) => {
    try {
        const todos = await todoModel.findAll();
        res.render('todos/index', { todos }); // Renderizar la vista 'todos/index' con los datos de todas las tareas
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Store - Agregar nueva tarea
router.post('/', async (req, res) => {
    try {
        const { title, completed } = req.body;
        const newTodo = await todoModel.create({ title, completed });

        // Redirigir a la ruta '/todospanel/added' después de agregar la tarea
        res.redirect('/todospanel/added');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Agregando una nueva ruta para '/added' que renderice la vista added.ejs
router.get('/added', async (req, res) => {
    try {
        const todos = await todoModel.findAll();
        const latestTodo = todos[todos.length - 1]; // Obtener la última tarea agregada
        res.render('todos/added', { todo: latestTodo }); // Renderizar la vista 'todos/added' con los datos de la última tarea
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;