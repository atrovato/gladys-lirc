const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC 'KEY_MUTE' command as 'mute' television API.
 */
module.exports = function(params) {
  return lirc(params, 'KEY_MUTE');
};