/**
 * Created by BoB on 3/9/2017.
 */

const commuteController = {};
commuteController.commutes = [];


commuteController.newCommute = (data)=>{
  this.commutes.push(data);
}
export default commuteController;
