const proxyquire = require('proxyquire');
const chai = require('chai');
const assert = chai.assert;

var lircMock = function (peripheral, remoteKey) {
  return Promise.resolve(remoteKey);
};
var sharedMock = {
  delay: 1
};

var exec = proxyquire('../../../lib/lirc.setChannel.js', {
  './lirc.sendCommand.js': lircMock,
  './shared.js': sharedMock
});

describe('TV API : channel', function () {

  it('Send LIRC command KEY_1', function (done) {
    var deviceInfo = {
      deviceType: {
        identifier: 'RemoteName',
        deviceTypeIdentifier: 'switch'
      },
      channel: 1
    };
    var expectedRemoteKey = 'KEY_1';

    exec(deviceInfo)
      .then((result) => {
        assert.equal(expectedRemoteKey, result, 'Invalid result');
        done();
      })
      .catch((result) => {
        done('Should not have fail : ', result);
      });
  });

  it('Send LIRC command KEY_2', function (done) {
    var deviceInfo = {
      deviceType: {
        identifier: 'RemoteName',
        deviceTypeIdentifier: 'switch'
      },
      channel: 2
    };
    var expectedRemoteKey = 'KEY_2';

    exec(deviceInfo)
      .then((result) => {
        assert.equal(expectedRemoteKey, result, 'Invalid result');
        done();
      })
      .catch((result) => {
        done('Should not have fail : ', result);
      });
  });

  it('Send LIRC command KEY_3', function (done) {
    var deviceInfo = {
      deviceType: {
        identifier: 'RemoteName',
        deviceTypeIdentifier: 'switch'
      },
      channel: 3
    };
    var expectedRemoteKey = 'KEY_3';

    exec(deviceInfo)
      .then((result) => {
        assert.equal(expectedRemoteKey, result, 'Invalid result');
        done();
      })
      .catch((result) => {
        done('Should not have fail : ', result);
      });
  });

  it('Send LIRC command KEY_4', function (done) {
    var deviceInfo = {
      deviceType: {
        identifier: 'RemoteName',
        deviceTypeIdentifier: 'switch'
      },
      channel: 4
    };
    var expectedRemoteKey = 'KEY_4';

    exec(deviceInfo)
      .then((result) => {
        assert.equal(expectedRemoteKey, result, 'Invalid result');
        done();
      })
      .catch((result) => {
        done('Should not have fail : ', result);
      });
  });

  it('Send LIRC command KEY_5', function (done) {
    var deviceInfo = {
      deviceType: {
        identifier: 'RemoteName',
        deviceTypeIdentifier: 'switch'
      },
      channel: 5
    };
    var expectedRemoteKey = 'KEY_5';

    exec(deviceInfo)
      .then((result) => {
        assert.equal(expectedRemoteKey, result, 'Invalid result');
        done();
      })
      .catch((result) => {
        done('Should not have fail : ', result);
      });
  });

  it('Send LIRC command KEY_6', function (done) {
    var deviceInfo = {
      deviceType: {
        identifier: 'RemoteName',
        deviceTypeIdentifier: 'switch'
      },
      channel: 6
    };
    var expectedRemoteKey = 'KEY_6';

    exec(deviceInfo)
      .then((result) => {
        assert.equal(expectedRemoteKey, result, 'Invalid result');
        done();
      })
      .catch((result) => {
        done('Should not have fail : ', result);
      });
  });

  it('Send LIRC command KEY_7', function (done) {
    var deviceInfo = {
      deviceType: {
        identifier: 'RemoteName',
        deviceTypeIdentifier: 'switch'
      },
      channel: 7
    };
    var expectedRemoteKey = 'KEY_7';

    exec(deviceInfo)
      .then((result) => {
        assert.equal(expectedRemoteKey, result, 'Invalid result');
        done();
      })
      .catch((result) => {
        done('Should not have fail : ', result);
      });
  });

  it('Send LIRC command KEY_8', function (done) {
    var deviceInfo = {
      deviceType: {
        identifier: 'RemoteName',
        deviceTypeIdentifier: 'switch'
      },
      channel: 8
    };
    var expectedRemoteKey = 'KEY_8';

    exec(deviceInfo)
      .then((result) => {
        assert.equal(expectedRemoteKey, result, 'Invalid result');
        done();
      })
      .catch((result) => {
        done('Should not have fail : ', result);
      });
  });

  it('Send LIRC command KEY_9', function (done) {
    var deviceInfo = {
      deviceType: {
        identifier: 'RemoteName',
        deviceTypeIdentifier: 'switch'
      },
      channel: 9
    };
    var expectedRemoteKey = 'KEY_9';

    exec(deviceInfo)
      .then((result) => {
        assert.equal(expectedRemoteKey, result, 'Invalid result');
        done();
      })
      .catch((result) => {
        done('Should not have fail : ', result);
      });
  });

  it('Send LIRC command KEY_0', function (done) {
    var deviceInfo = {
      deviceType: {
        identifier: 'RemoteName',
        deviceTypeIdentifier: 'switch'
      },
      channel: 0
    };
    var expectedRemoteKey = 'KEY_0';

    exec(deviceInfo)
      .then((result) => {
        assert.equal(expectedRemoteKey, result, 'Invalid result');
        done();
      })
      .catch((result) => {
        done('Should not have fail : ', result);
      });
  });

  it('Send LIRC command KEY_48', function (done) {
    var deviceInfo = {
      deviceType: {
        identifier: 'RemoteName',
        deviceTypeIdentifier: 'switch'
      },
      channel: 48
    };
    var expectedRemoteKey = 'KEY_48';

    exec(deviceInfo)
      .then((result) => {
        assert.equal(expectedRemoteKey, result, 'Invalid result');
        done();
      })
      .catch((result) => {
        done('Should not have fail : ', result);
      });
  });

  it('Send LIRC command KEY_103', function (done) {
    var deviceInfo = {
      deviceType: {
        identifier: 'RemoteName',
        deviceTypeIdentifier: 'switch'
      },
      channel: 103
    };
    var expectedRemoteKey = 'KEY_103';

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