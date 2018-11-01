const chai = require('chai');
const assert = chai.assert;
const getCurrentChannel = require('../../../lib/lirc.getCurrentChannel.js');

describe('TV API : get current channel', function () {

  it('Get current channel', function (done) {
    assert.equal(undefined, getCurrentChannel(), 'Invalid result');
    done();
  });
});