var expect = require('chai').expect;
var starWarsNames = require('./index');

describe('starwars-names', function() {
  it('should work!', function() {
    expect(starWarsNames.all.length).to.equal(12);
  });
});