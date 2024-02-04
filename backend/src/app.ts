export { App };
import express, { Application } from 'express';
import http from 'http';
import { Server } from 'socket.io';
//porgramacion orientada a objetos



class App {
    private app: Application;
    private http: http.Server;
    private io: Server;


    constructor() {
        this.app = express();
        //inicializacion de servidor http
        this.http = new http.createServer(this.app);
        this.io = new Server(this.http);
    }
}