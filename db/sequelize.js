const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todos-web2', 'postgres', 'Camilolatorre11', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;