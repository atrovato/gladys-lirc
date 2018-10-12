const lirc = require('./lirc.sendCommand.js');
const Promise = require('bluebird');

/**
 * Executes LIRC 'KEY_CHANNEL' command as 'channel' television API.
 */
module.exports = function(params) {
  var newChannelStr = params.channel.toString();
  var keys = newChannelStr.split('');

  return Promise.each(keys, function(key) {
    return lirc(params, 'KEY_' + params.channel)
      .then(() => {
        return Promise.delay(1500);
      });
  }).then(() => {
    return gladys.deviceState.createByDeviceTypeIdentifier('channel', 'lirc', params.channel);
  });
};