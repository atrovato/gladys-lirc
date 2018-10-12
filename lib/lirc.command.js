const Promise = require('bluebird');

module.exports = function command(options) {
  console.log('LIRC command', options);

  var value;

  switch(options.label){
  case 'change-channel':
    var values = options.replacedText.split(' ');
    value = values[values.length - 1];
    break;
  }

  console.log('Executing LIRC with value=', value);

  if(!value){
    return Promise.reject();
  } else {
    // get all channel TV deviceType
    return gladys.deviceType.getByType({category: 'television', type: 'channel' })
      .then((deviceTypes) => {

        sails.log.info('LIRC.command : Found ' + deviceTypes.length + ' TV');

        // then, foreach deviceTypes found, change channel
        return Promise.map(deviceTypes, function(deviceType) {
          return gladys.deviceType.exec({devicetype: deviceType.id, value: value}).then(() => {
            return Promise.resolve(options.label); 
          } );
        });
      });
  }
};