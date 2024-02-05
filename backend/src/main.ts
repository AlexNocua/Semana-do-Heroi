// Archivo que va a ser iniciado

// console.log('Hello wordss')

import { App } from './app'

const app = new App();

//Esto ya es para que este mismo sea disparado con esto podemos ejecutar
app.listenSocket();
app.listen();