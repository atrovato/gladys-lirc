const proxyquire = require('proxyquire');
const chai = require('chai');
const assert = chai.assert;

var lircMock = function (peripheral) {
  return Promise.resolve(peripheral);
};

var exec = proxyquire('../../../lib/exec.js', {
  './lirc.sendCommand.js': lircMock
});

describe('Gladys device exec', function () {

  it('Send LIRC command', function (done) {
    var deviceInfo = {
      deviceType: {
        deviceTypeIdentifier: 'switch'
      },
      state: {
        value: 1
      }
    };

    exec(deviceInfo)
      .then((result) => {
        assert.equal(deviceInfo.state.value, result, 'Invalid result');
        done();
      })
      .catch((result) => {
        done('Should not have fail : ', result);
      });
  });
});