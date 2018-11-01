const proxyquire = require('proxyquire');
const chai = require('chai');
const assert = chai.assert;

var lircError = null;

var lircMock = {};
lircMock.irsend = {};
lircMock.irsend.send_once = function (remoteControl, remoteKey, callback) {
  callback(lircError);
};

var lirc = proxyquire('../../../lib/lirc.sendCommand.js', {
  'lircv0.9.4_node': lircMock
});

describe('LIRC send command', function () {

  beforeEach(function () {
    lircError = null;
  });

  it('Send LIRC command', function (done) {
    var deviceInfo = {
      deviceType: {
        identifier: 'RemoteName',
        deviceTypeIdentifier: 'switch'
      }
    };
    var remoteKey = 'REMOTE_KEY';

    lirc(deviceInfo, remoteKey)
      .then((result) => {
        assert.equal(remoteKey, result, 'Invalid result');
        done();
      })
      .catch((result) => {
        done('Should not have fail : ', result);
      });
  });

  it('Error sending LIRC command', function (done) {
    lircError = 'error sending';
    var deviceInfo = {
      deviceType: {
        identifier: 'RemoteName',
        deviceTypeIdentifier: 'switch'
      }
    };
    var remoteKey = 'REMOTE_KEY';

    lirc(deviceInfo, remoteKey)
      .then(() => {
        done('Should have fail');
      })
      .catch((result) => {
        assert.equal(lircError, result, 'Expected error');
        done();
      });
  });
});