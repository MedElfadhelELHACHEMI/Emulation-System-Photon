/**
 * Created by BoB on 3/9/2017.
 */
import commuteController from './commuteController'
import carController from './carController'



const socketController = {};

socketController.eventHandler = (socket)=>{
  const _socket=socket
  socket.on('newcommute',(data)=>{
  	console.log('newcommute')
    return commuteController.newCommute(data)
  })
  socket.on('clientSync',(data,_socket)=>{
    return carController.clientSync(data,socket)
  })
}

export default socketController;