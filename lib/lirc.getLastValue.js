/**
 * Recupere la derniere valeur pour le device en question.
 */
module.exports = function(params, deviceIdentifier) {
  var options = {
    deviceIdentifier: deviceIdentifier,
    deviceService: 'lirc',
    deviceTypeIdentifier: params.deviceType.identifier
  };
  return gladys.deviceType.getByIdentifier(options)
    .then((deviceType) => {
      return deviceType.lastValue;
    });
};