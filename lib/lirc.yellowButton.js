const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC 'KEY_YELLOW' command as 'yellowButton' television API.
 */
module.exports = function(params) {
  return lirc(params, 'KEY_YELLOW');
};