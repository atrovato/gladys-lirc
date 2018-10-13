const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC 'KEY_FASTFORWARD' command as 'fastForward' television API.
 */
module.exports = function(params) {
  return lirc(params, 'KEY_FASTFORWARD');
};
