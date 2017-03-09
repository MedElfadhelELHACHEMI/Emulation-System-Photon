/**
 * Created by BoB on 3/9/2017.
 */
import commuteController from './commuteController'



const socketController = {};

socketController.eventHandler = (socket)=>{
  socket.on('newcommute',(data)=>{
    return commuteController.newCommute(data)
  })
}

export default socketController;