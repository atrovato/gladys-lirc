const lirc = require('./lirc.sendCommand.js');

/**
 * Executes LIRC 'KEY_RED' command as 'redButton' television API.
 */
module.exports = function(params) {
  return lirc(params, 'KEY_RED');
};