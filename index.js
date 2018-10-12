const television = {
  getState : require('./lib/lirc.getState.js'),
  switchState : require('./lib/lirc.switchState.js'),
  getCurrentChannel : require('./lib/lirc.getCurrentChannel.js'),
  setChannel : require('./lib/lirc.setChannel.js')
};

/**
 * Gladys LIRC module entry point, using the television API.
 */
module.exports = function(sails) {
  return {
    television: television
  };
};
