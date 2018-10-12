const lastValue = require('./lirc.getLastValue.js');

/**
 * Recupere la derniere valeur de l'etat du device en question.
 */
module.exports = function(params) {
  return lastValue(params, 'power');
};