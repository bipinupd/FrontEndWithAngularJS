'use strict';

describe('Filter: reverseFilter', function () {

  // load the filter's module
  beforeEach(module('angularAppApp'));

  // initialize a new instance of the filter before each test
  var reverseFilter;
  beforeEach(inject(function ($filter) {
    reverseFilter = $filter('reverseFilter');
  }));

  it('should return the input prefixed with "reverseFilter filter:"', function () {
    var text = 'angularjs';
    expect(reverseFilter(text)).toBe('sjralugna');
  });

});
