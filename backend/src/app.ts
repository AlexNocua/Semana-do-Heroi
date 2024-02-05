export { App };
import express, { Application } from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
//porgramacion orientada a objetos



class App {
    private app: Application;
    private http: http.Server;
    private io: Server;


    constructor() {
        this.app = express();
        //inicializacion de servidor http
        this.http = new http.Server(this.app);
        this.io = new Server(this.http,{
            cors:{
                origin:'*',
            },
        });
    }


    // Creacion de Primer metodo

    public listen() {
        this.http.listen(3333, () => {
            console.log('Server is rouning on port 3333')
        })
    }


    //Creacion de nosso primeiros eventos no socket

    // public listenSocket() {
    //     this.io.of('/streams').on('connection', (socket) => {
    //         //todos los eventos de diferentes rutas y difereentes canales
    //         //no es una buena practica aplicar todos los eventos


    //     })//on para escuchar los eventos
    // }


    //evento de coneccion
    public listenSocket() {
        this.io.of('/streams').on('connection', this.socketEvents)//on para escuchar los eventos
    }

    private socketEvents(socket: Socket) {
        console.log('Socket connected: ' + socket.id) //cada vez que un cliente se conecta es generado un id para el 
        //Emitir evento de suscripcion esto cuando el usuario accesa a la room
        socket.on('subscribe', (data => { // El cliente se subscribio entonces voy a ponerlo dentro de una sala
            console.log('Usuario Inserido na sala: ' + socket.id)
            //el cliente lo voy a poner dentro de la sala y los mensajes y todo solo van a ser para las personas dentro de la sala
            socket.join(data.roomId) // entro en una room especifica

            //escuchar y enviar mensajes para esa sala 

            socket.broadcast.to(data.roomId).emit('chat', {
                menssage: data.message,
                username: data.username,
                time: data.time,
            });
        })
        )
    }
}