const lircRemoteParser = require('./lirc.parser.remotes.js');
const lircKeyParser = require('./lirc.parser.keys.js');
const Promise = require('bluebird');

/**
 * Search for existing LIRC configurations and add it as new devices.
 */
module.exports = function() {
  return lircRemoteParser()
    .then((remotes) => {
      return Promise.map(remotes, function(remote) {
        return lircKeyParser(remote)
          .then((keys) => {
            var device = {
              name : remote,
              protocol : 'infrared',
              service : 'lirc',
              identifier : remote 
            };
            var deviceTypes = new Array();
            keys.forEach(function(key) {
              deviceTypes.push({
                name : key,
                type : 'push',
                identifier : key,
                sensor : false,
                min : 0,
                max : 1000,
                display : false
              });
            });
            return gladys.device.create({ device: device, types: deviceTypes });
          });
      });
    });
};