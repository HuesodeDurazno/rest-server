const express = require("express");
const cors = require("cors");

//this class initializes the server
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';
        //middlewares
        this.middlewares();
        //aplicattion/routes
        this.routes();
    }

    middlewares() {
        //public directory
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    //this method initializes the routes
    routes() {
        this.app.use(this.usersPath, require('../routes/user'));
    }

    //this method initializes the server
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

module.exports = Server;
