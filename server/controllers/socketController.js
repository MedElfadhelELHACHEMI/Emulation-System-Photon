/**
* Created by BoB on 3/9/2017.
*/
import commuteController from './commuteController'
import carController from './carController'




const socketController = {};

socketController.eventHandler = (socket, io)=>{
  const _socket = socket;
  _socket.on('newcommute',(data)=>{
    console.log('[EVENT] NEW_COMMUTE');
    commuteController.newCommute(data,function(car){
      io.emit('car_movement', car );
    })
  })
  _socket.on('clientSync',(data,_socket)=>{
    return carController.clientSync(data,socket)
  })
}



export default socketController;
