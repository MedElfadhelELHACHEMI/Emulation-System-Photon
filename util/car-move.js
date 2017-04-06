const carMove = {};
carMove.interpolate = interpolate;

function interpolate(from, to, dtime) {
  const res =  (from * (1 - dtime)) + (to * dtime);
  return res;
}

carMove.interpolateLatLng  = function interpolateLatLng(from, to, dtime){
  const res = [interpolate(from[0], to[0], dtime),interpolate(from[1], to[1], dtime)];
  return res;
}

export default carMove;
