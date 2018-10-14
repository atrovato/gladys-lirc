const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC commands as device exec.
 */
module.exports = function(deviceInfo) {
  return lirc(deviceInfo, actionType)
    .then(() => {
      return resolve(deviceInfo.state.value);
    });
};