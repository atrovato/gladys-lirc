const lastValue = require('./lirc.getLastValue.js');

/**
 * Recupere la derniere valeur de la chaine du device en question.
 */
module.exports = function(params) {
  return lastValue(params, 'channel');
};