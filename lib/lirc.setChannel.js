const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC 'KEY_CHANNEL' command as 'channel' television API.
 */
module.exports = function(params) {
  return lirc(params, 'KEY_' + params.channel)
    .then(() => {
      return gladys.deviceState.createByDeviceTypeIdentifier('channel', 'lirc', params.channel);
    });
};