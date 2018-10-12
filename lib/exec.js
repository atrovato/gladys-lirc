const Promise = require('bluebird');
const nodeLIRC = require('node-lirc');

module.exports = function(deviceInfo) {
  return new Promise((resolve, reject) => {
    var remoteControl = deviceInfo.deviceType.identifier;
    var actionType = deviceInfo.deviceType.type;

    var remoteKeys = [];
    switch (actionType) {
    case 'binary':
      remoteKeys.push('KEY_POWER');
      break;
    case 'channel':
      var keyStr = deviceInfo.state.value.toString();
      for (var i = 0; i < keyStr.length; i++) {
        remoteKeys.push('KEY_' + keyStr.charAt(i));
      }
      remoteKeys.push('KEY_ENTER');
      break;
    default:
      reject('Command is not recognize');
    }

    return Promise.each(remoteKeys, function (remoteKey) {
      try {
        console.log('Sending LIRC ' + remoteKey + ' to ' + remoteControl);
        nodeLIRC.send(remoteControl, remoteKey);
        return Promise.delay(1500);
      } catch (err) {
        reject(err);
      }
    });
  });
};
