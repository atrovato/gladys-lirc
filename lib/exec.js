const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC commands as device exec.
 */
module.exports = function(deviceInfo) {
  return new Promise((resolve, reject) => {
    var actionType = deviceInfo.deviceType.deviceTypeIdentifier;
    
    switch (actionType) {
    case 'power':
      return lirc(deviceInfo, 'KEY_POWER')
        .then(() => {
          return resolve(deviceInfo.state.value);
        });
    default:
      return reject('Command <' + actionType + '> is not recognize');
    }
  });
};