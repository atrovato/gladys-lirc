const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC 'KEY_POWER' command as 'switchState' television API.
 */
module.exports = function(params) {
  return lirc(params, 'KEY_POWER');
};