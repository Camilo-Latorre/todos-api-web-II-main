// src/models/todoModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../db/sequelize');

const Todo = sequelize.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

// Sincronizar el modelo con la base de datos
Todo.sync({ alter: true });

module.exports = Todo;
