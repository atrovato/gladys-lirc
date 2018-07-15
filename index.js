
module.exports = function(sails) {
    var changeChannel = require('./lib/change_channel.js');
    var exec = require('./lib/exec.js');
    var setup = require('./lib/setup.js');
    var install = require('./lib/install.js');
    var command = require('./lib/lirc.command.js');

    return {
        changeChannel: changeChannel,
    