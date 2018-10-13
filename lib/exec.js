const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC commands as device exec.
 */
module.exports = function(deviceInfo) {
  return new Promise((resolve, reject) => {
    var actionType = deviceInfo.deviceType.identifier;
    var remoteControl = deviceInfo.deviceType.device.identifier;
    
    switch (actionType) {
    case 'power':
      return lirc(remoteControl, 'KEY_POWER')
        .then(() => {
          return resolve(deviceInfo.state.value);
        });
    default:
      return reject('Command is not recognize');
    }
  });
};