const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC 'KEY_VOLUMEUP' command as 'volumeUp' television API.
 */
module.exports = function(params) {
  return lirc(params, 'KEY_VOLUMEUP');
};