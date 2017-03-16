/**
* Created by BoB on 3/9/2017.
*/

import timer from 'timer'
import carMove from '../util/car-move'

const commuteController = {};
const delay = 250;


commuteController.newCommute = (commute)=>{
  let step = 0;
  let timestamp = 0;
  const coord = commute.Path.geometry.coordinates;
  let interval = timer.setInterval(movecar,delay,coord,step, timestamp);
}
export default commuteController;


function movecar(coord,step,timestamp){
  if(step+1 == coord.length -1) return ;

  const newPos = carMove.interpolateLatLng(coord[step],coord[step+1], timestamp)

  if(newPos[0].toFixed(decimal) == coord[step][0].toFixed(decimal) && newPos[1].toFixed(decimal) == coord[step][1].toFixed(decimal)){
    timestamp = 0;
    step++;
  }
  timestamp += delay;
  console.log({
    'step' : step,
    'start': coord[step],
    'finish' : coord[step + 1]
    'currentPos': newPos
  });
}
