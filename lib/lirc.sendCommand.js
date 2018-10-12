const nodeLIRC = require('node-lirc');

/**
 * Executes LIRC commands from television API.
 */
module.exports = function(params, remoteKey) {
  return new Promise((resolve, reject) => {
    var remoteControl = params.deviceType.identifier;
    nodeLIRC.send(remoteControl, remoteKey);
    return resolve();
  });
};
