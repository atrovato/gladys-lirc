const lircClient = require('lircv0.9.4_node');

/**
 * Lists LIRC remote keys and converts it to as list of strings.
 */
module.exports = function(remote) {
  return new Promise((resolve, reject) => {
    lircClient.irsend.list(remote, '', function(error, stdout, stderr) {
      if (error) {
        console.error('Error during LIRC setup', stderr);
        return Promise.reject(error);
      } else {
        var keyLines = stdoutKeys.split('\n');
        var keys = new Array();

        keyLines.forEach(function(element, index, array) {
          element = element.trim();
          var keyName = element.match(/^(.+)$/);
          if (keyName) {
            keys.push(keyName);
          }
        });

        if (keys.length) {
          return reject('No keys available for remote', remote);
        } else {
          return resolve(keys);
        }
      }
    });
  });
};