/**
 * Created by BoB on 3/9/2017.
 */
import commuteController from './commuteController'




const socketController = {};

socketController.eventHandler = (socket)=>{
  socket.on('newcommute',(commute)=>{
    console.log('[EVENT] NEW_COMMUTE');
    return commuteController.newCommute(commute)
  })
}



export default socketController;
