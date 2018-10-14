const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC 'KEY_BLUE' command as 'blueButton' television API.
 */
module.exports = function(params) {
  return lirc(params, 'KEY_BLUE');
};