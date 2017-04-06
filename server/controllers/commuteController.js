/**
* Created by Alaa Ksontini on 3/9/2017.
*/

import timer from 'timers'
import carMove from '../../util/car-move'
import db from '../models';

const commuteController = {};
const delay = 100;
const decimal = 5;
let interval;
commuteController.commutes = [];

commuteController.newCommute = (commute, callback)=>{
  let _commute = commute;
  let car;
  this.commutes.push(commute);
  db.model('cars').findOne({'_id' : commute.car_id}).then(theCar => {
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

    // console.log(newPos[0].toFixed(decimal), coord[commute.step][0].toFixed(decimal))
    // console.log(newPos[1].toFixed(decimal), coord[commute.step][1].toFixed(decimal))
    return;
  }
  theCar.position.coordinates = newPos;
  callback(theCar);
  commute.timestamp += 0.001;


}

export default commuteController;
