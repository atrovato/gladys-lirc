var nodeLIRC = require('node-lirc');

module.exports = function(deviceInfo) {
    return new Promise((resolve, reject) => {
        var remoteControl = deviceInfo.deviceType.identifier;
        console.log('Sending LIRC power command to ' + remoteControl);

        try {
            nodeLIRC.send(remoteControl, "KEY_POWER");
            resolve();
        } catch (err) {
            reject(err);
        }
    });
}
