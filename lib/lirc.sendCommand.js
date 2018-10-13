const lircClient = require('lirc-client');

/**
 * Executes LIRC commands from television API.
 */
module.exports = function(params, remoteKey) {
  var remoteControl = params.deviceType.identifier;
  return lircClient.sendOnce(remoteControl, remoteKey);
};
