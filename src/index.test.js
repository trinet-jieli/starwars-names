var expect = require('chai').expect;
var starWarsNames = require('./index');

describe('starwars-names', function() {

  describe('all', function() {
    it('should be an array of strings', function() {
      expect(starWarsNames.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        })
      }
    });

    it('should have `Zuckuss`', function() {
      expect(starWarsNames.all).to.include('Zuckuss');
    });
  });

  describe('random', function() {
    it('should return a random name from the starWarsNames.all', function() {
      var randomItem = starWarsNames.random();
      expect(starWarsNames.all).to.include(randomItem);
    });
  });
});