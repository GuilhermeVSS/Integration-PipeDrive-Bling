const express = require('express');
const routes = require('./routes.js');
const database = require('./database');

class App {
    constructor(){
        this.server = express();
        this.middleware();
        this.routes();
        this.connection();
    }
    middleware(){
        this.server.use(express.json());
    }
    routes(){
        this.server.use(routes);
    }

    connection(){
        this.mongo = database.init();
    }
}

module.exports = new App().server;