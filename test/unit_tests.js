const rockstar = require('../src/rockstar');
const expect = require('chai').expect;

describe('Compiling', () => {
  it('should declare variables properly', () => {
    expect(rockstar.compile('Joe is 1')).to.be.equal('Joe=1;');
    expect(rockstar.compile('Joe was 1')).to.be.equal('Joe=1;');
    expect(rockstar.compile('Beatles were 4')).to.be.equal('Beatles=4;');
  });

  it('should handle keywords', () => {
    //TODO: Should we check types too?
    expect(rockstar.compile('Joe is nothing')).to.be.equal('Joe=0;');
    expect(rockstar.compile('Joe is nobody')).to.be.equal('Joe=0;');
    expect(rockstar.compile('Joe is nowhere')).to.be.equal('Joe=0;');
    expect(rockstar.compile('Joe is empty')).to.be.equal('Joe=0;');
    expect(rockstar.compile('Joe is gone')).to.be.equal('Joe=0;');
    expect(rockstar.compile('Joe is true')).to.be.equal('Joe=true;');
    expect(rockstar.compile('Joe is right')).to.be.equal('Joe=true;');
    expect(rockstar.compile('Joe is ok')).to.be.equal('Joe=true;');
    expect(rockstar.compile('Joe is yes')).to.be.equal('Joe=true;');
    expect(rockstar.compile('Joe is false')).to.be.equal('Joe=false;');
    expect(rockstar.compile('Joe is wrong')).to.be.equal('Joe=false;');
    expect(rockstar.compile('Joe is no')).to.be.equal('Joe=false;');
    expect(rockstar.compile('Joe is lies')).to.be.equal('Joe=false;');
    expect(rockstar.compile('Joe is mysterious')).to.be.equal('Joe=undefined;');
  });

  it('should understand athmetic operations', () => {
    expect(rockstar.compile('Joe is 2 minus 1')).to.be.equal('Joe=2-1;');
    expect(rockstar.compile('Joe is 2 without 1')).to.be.equal('Joe=2-1;');
    expect(rockstar.compile('Joe is 2 plus 1')).to.be.equal('Joe=2+1;');
    expect(rockstar.compile('Joe is 2 with 1')).to.be.equal('Joe=2+1;');
    expect(rockstar.compile('Joe is 2 times 1')).to.be.equal('Joe=2*1;');
    expect(rockstar.compile('Joe is 2 of 1')).to.be.equal('Joe=2*1;');
    expect(rockstar.compile('Joe is 2 over 1')).to.be.equal('Joe=2/1;');
  });
});
