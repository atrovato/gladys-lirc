
module.exports = function(sails) {
    var exec = require('./lib/exec.js');
    var setup = require('./lib/setup.js');
    var install = require('./lib/install.js');
    var command = require('./lib/command.js');

    return {
        exec: exec,
        setup: setup,
        install: install,
        command: command
    }
};
