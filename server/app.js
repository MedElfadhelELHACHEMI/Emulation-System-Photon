import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import http from 'http';
import SocketIO from 'socket.io'
import socketController from './controllers/socketController';

import routes from './routes';

mongoose.connect('mongodb://localhost:27017/photon', () => {
  console.log('Contected to mongodb...');
});

const app = express();
const server = http.createServer(app);
const io = new SocketIO(server);

// Middleware
app.use(bodyParser.json());

app.use('/api', routes);

io.on('connection', (socket) => {

	console.log('connected client')
  return socketController.eventHandler(socket, io)

});




export default server;
