/**
 * Created by BoB on 3/10/2017.
 */
import commuteController from './commuteController'

const carController={};
const _commutes = commuteController.commutes;

carController.clientSync = (data,socket)=>{
  console.log('received'+data)
  socket.emit('response','ACK')
}


export default carController
