/**
* Created by Alaa Ksontini on 3/9/2017.
*/

import timer from 'timers'
import carMove from '../../util/car-move'
import db from '../models';

let commuteController = {};
const delay = 100;
const decimal = 5;
let interval;
commuteController.commutes = [];

commuteController.newCommute = (commute, callback)=>{
  let _commute = commute;
  let car;
  commuteController.commutes.push(commute);
  console.log('car_id: ', commute.car_id)
  db.cars.findOne({'_id' : commute.car_id}).then(theCar => {
    _commute.step = 0;
    car = theCar;
    _commute.timestamp = 0;
    interval = timer.setInterval(movecar,delay,_commute, theCar, callback);
  })

}



function movecar(commute,theCar, callback){
  let coord = commute.Path.geometry.coordinates;
  if(commute.step+1 == coord.length) {
    console.log('end step');
    timer.clearInterval(interval);
    return ;
  }

  const newPos = carMove.interpolateLatLng(coord[commute.step],coord[commute.step+1], commute.timestamp)

  if(newPos[0].toFixed(decimal) === coord[commute.step+1][0].toFixed(decimal) && newPos[1].toFixed(decimal) === coord[commute.step+1][1].toFixed(decimal)){
    commute.timestamp = 0;
    commute.step++;
    return;
  }
  theCar.position.coordinates = newPos;
  callback(theCar);
  commute.timestamp += 0.001;


}

export default commuteController;
