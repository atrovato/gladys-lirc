var nodeLIRC = require('node-lirc');

module.exports = function() {
    return new Promise((resolve, reject) => {
        console.log('Loading LIRC configuration to define devices...');
        nodeLIRC.init();
        nodeLIRC.reloadData();

        // Get all the remotes and commands known by LIRC
        console.log(nodeLIRC.remotes);

        try {
            for (remote in nodeLIRC.remotes) {
                var remoteName = nodeLIRC.remotes[i].name;
                console.log('LIRD remote ' + remoteName + ' found');

                var device = {
                    name: remoteName,
                    protocol: 'infrared',
                    service: 'lirc',
                    identifier: remoteName
                };

                var types = [{
                    type : 'binary',
                    name : 'switch',
                    identifier : 'binary',
                    sensor : false,
                    min : 0,
                    max : 1
                }];

                console.log('Creating LIRC device ' + remoteName);
                gladys.device.create({
                    device: device,
                    types: types
                })
            }

            resolve();
        } catch (err) {
            reject(err);
        }
    });
}
