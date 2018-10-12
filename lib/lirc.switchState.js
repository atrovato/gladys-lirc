const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC 'KEY_POWER' command as 'switchState' television API.
 */
module.exports = function(params) {
  return lirc(params.deviceInfo, 'KEY_POWER')
    .then(() => {
      return gladys.deviceState.createByDeviceTypeIdentifier('power', 'lirc', params.state);
    });
};