const lircClient = require('lircv0.9.4_node');

/**
 * Executes LIRC commands from television API.
 */
module.exports = function(params, remoteKey) {
  var remoteControl = params.deviceType.identifier;
  return new Promise((resolve, reject) => {
    lircClient.irsend.send_once(remoteControl, remoteKey, (error) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(remoteKey);
      }
    });
  }); 
};
