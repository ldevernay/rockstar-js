const rockstar = require('../src/rockstar');
const expect = require('chai').expect;

describe('Compiling', () => {
  it('should declare variables properly', () => {
    expect(rockstar.compile('Joe is 1')).to.be.equal('Joe=1;');
  });
});
