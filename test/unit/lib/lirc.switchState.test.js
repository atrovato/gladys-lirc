const proxyquire = require('proxyquire');
const chai = require('chai');
const assert = chai.assert;

var lircMock = function (peripheral, remoteKey) {
  return Promise.resolve(remoteKey);
};

var expectedRemoteKey = 'KEY_POWER';
var exec = proxyquire('../../../lib/lirc.switchState.js', {
  './lirc.sendCommand.js': lircMock
});

describe('TV API : switch state', function () {

  it('Send LIRC command', function (done) {
    var deviceInfo = {
      deviceType: {
        identifier: 'RemoteName',
        deviceTypeIdentifier: 'switch'
      }
    };

    exec(deviceInfo)
      .then((result) => {
        assert.equal(expectedRemoteKey, result, 'Invalid result');
        done();
      })
      .catch((result) => {
        done('Should not have fail : ', result);
      });
  });
});