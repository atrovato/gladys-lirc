const lirc = require('./lirc.sendCommand.js');
const Promise = require('bluebird');
const shared = require('./shared.js');

/**
 * Executes LIRC 'KEY_CHANNEL' command as 'channel' television API.
 */
module.exports = function(params) {
  var newChannelStr = params.channel.toString();
  var keys = newChannelStr.split('');

  return Promise.each(keys, function(key) {
    return lirc(params, 'KEY_' + key)
      .then(() => {
        return Promise.delay(shared.delay);
      });
  }).then(() => {
    return Promise.resolve('KEY_' + newChannelStr);
  });
};