const { Client } = require('pg');

// Función para crear un nuevo cliente y conectarse
const connectClient = async () => {
    const client = new Client({
        user: 'postgres',
        host: process.env.DB_HOST,
        database: 'todos-web2',
        password: 'Camilolatorre11',
        port: process.env.DB_PORT
    })
    await client.connect();
    return client;
};

module.exports = {
    connectClient,
};
