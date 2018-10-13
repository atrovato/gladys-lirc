const lircClient = require('lirc-client');

/**
 * Executes LIRC commands from television API.
 */
module.exports = function(params, remoteKey) {
  var remoteControl = params.deviceType.identifier;
  // TODO prepare LIRC on remote server
  var lirc = new lircClient({});
  return lirc.sendOnce(remoteControl, remoteKey);
};
