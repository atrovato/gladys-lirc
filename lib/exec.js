const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC commands as device exec.
 */
module.exports = function(deviceInfo) {
  var actionType = deviceInfo.deviceType.deviceTypeIdentifier;
  return new Promise((resolve, reject) => {
    lirc(deviceInfo, actionType)
      .then(() => {
        return resolve(deviceInfo.state.value);
      });
  });
};