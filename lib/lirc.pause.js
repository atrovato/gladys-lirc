const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC 'KEY_PAUSE' command as 'pause' television API.
 */
module.exports = function(params) {
  return lirc(params, 'KEY_PAUSE');
};