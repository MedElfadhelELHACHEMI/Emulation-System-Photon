/**
* Created by BoB on 3/9/2017.
*/
import commuteController from './commuteController'




const socketController = {};

socketController.eventHandler = (socket)=>{
  const _socket = socket;
  _socket.on('newcommute',(data)=>{
    console.log('[EVENT] NEW_COMMUTE');
    commuteController.newCommute(data,function(car){
      socket.emit('car_movement', car );
    })
  })
}



export default socketController;
