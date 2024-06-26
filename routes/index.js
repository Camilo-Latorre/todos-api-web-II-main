const express = require('express');
const router = express.Router();
const todosRouter = require('./todos.router');
const todosApiFilesRouter = require('./todos.api.files.router');
const todosApiRouter = require('./todos.api.router');

function routerTodos(app) {
    app.use('/', router);
    router.use('/todospanel', todosRouter);
    router.use('/todospanel/added', todosApiFilesRouter);
    router.use('/api/v1/todos', todosApiRouter);
}

module.exports = routerTodos;
