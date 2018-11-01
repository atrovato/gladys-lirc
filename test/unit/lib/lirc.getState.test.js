const chai = require('chai');
const assert = chai.assert;
const getState = require('../../../lib/lirc.getState.js');

describe('TV API : get state', function () {

  it('Get state', function (done) {
    assert.equal(undefined, getState(), 'Invalid result');
    done();
  });
});