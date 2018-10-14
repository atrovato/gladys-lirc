const television = {
  getState : require('./lib/lirc.getState.js'),
  switchState : require('./lib/lirc.switchState.js'),
  getCurrentChannel : require('./lib/lirc.getCurrentChannel.js'),
  setChannel : require('./lib/lirc.setChannel.js'),
  fastForward : require('./lib/lirc.fastForward.js'),
  rewind : require('./lib/lirc.rewind.js'),
  mute : require('./lib/lirc.mute.js'),
  volumeUp : require('./lib/lirc.volumeUp.js'),
  volumeDown : require('./lib/lirc.volumeDown.js'),
  play : require('./lib/lirc.play.js'),
  pause : require('./lib/lirc.pause.js'),
  stop : require('./lib/lirc.stop.js'),
  getSources : require('./lib/lirc.getSources.js'),
  redButton : require('./lib/lirc.redButton.js'),
  blueButton : require('./lib/lirc.blueButton.js'),
  greenButton : require('./lib/lirc.greenButton.js'),
  yellowButton : require('./lib/lirc.yellowButton.js')
};
const exec = require('./lib/exec.js');
const setup = require('./lib/setup.js');

/**
 * Gladys LIRC module entry point, using the television API.
 */
module.exports = function(sails) {
  return {
    exec: exec,
    setup: setup,
    television: television
  };
};
