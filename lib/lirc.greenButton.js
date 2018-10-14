const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC 'KEY_GREEN' command as 'greenButton' television API.
 */
module.exports = function(params) {
  return lirc(params, 'KEY_GREEN');
};