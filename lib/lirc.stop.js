const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC 'KEY_STOP' command as 'stpo' television API.
 */
module.exports = function(params) {
  return lirc(params, 'KEY_STOP');
};