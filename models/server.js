const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        // middlewares
        this.middlewares();

        // add routes
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());
        // read and parse body
        this.app.use(express.json());
        // add public directory access
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, ()=>{
            console.log('server listening at port', this.port);
        });
    }
}

module.exports = Server;