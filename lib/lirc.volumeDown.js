const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC 'KEY_VOLUMEDOWN' command as 'volumeDown' television API.
 */
module.exports = function(params) {
  return lirc(params, 'KEY_VOLUMEDOWN');
};