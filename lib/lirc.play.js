const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC 'KEY_PLAY' command as 'play' television API.
 */
module.exports = function(params) {
  return lirc(params, 'KEY_PLAY');
};