const lircClient = require('lircv0.9.4_node');

/**
 * Lists LIRC remotes and converts it to as list of strings.
 */
module.exports = function() {
  return new Promise((resolve, reject) => {
    lircClient.irsend.list('', '', function(error, stdout, stderr) {
      if (error) {
        console.error('Error during LIRC setup', stderr);
        return Promise.reject(error);
      } else {
        var remoteLines = stdout.split('\n');
        var remotes = new Array();

        remoteLines.forEach(function(element) {
          element = element.trim();
          var remoteName = element.match(/^(.+)$/);
          if (remoteName) {
            remotes.push(remoteName[1]);
          }
        });

        if (remotes.length == 0) {
          return reject('No remotes available');
        } else {
          return resolve(remotes);
        }
      }
    });
  });
};