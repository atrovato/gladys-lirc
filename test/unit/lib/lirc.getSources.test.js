const chai = require('chai');
const assert = chai.assert;
const getSources = require('../../../lib/lirc.getSources.js');

describe('TV API : get sources', function () {

  it('Get sources', function (done) {
    assert.equal(undefined, getSources(), 'Invalid result');
    done();
  });
});