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
        res.redirect('/todospanel/added'); // Redirigir al usuario a la ruta '/todospanel/added' después de agregar la tarea
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
