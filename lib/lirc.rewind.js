const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC 'KEY_REWIND' command as 'rewind' television API.
 */
module.exports = function(params) {
  return lirc(params, 'KEY_REWIND');
};