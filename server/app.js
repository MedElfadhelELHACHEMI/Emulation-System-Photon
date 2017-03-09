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
const server = http.Server(app);
const io = new SocketIO(server);

// Middleware
app.use(bodyParser.json());

app.use('/api', routes);
io.on('connection', (socket) => {
  return socketController.eventHandler(socket)
});




export default server;
