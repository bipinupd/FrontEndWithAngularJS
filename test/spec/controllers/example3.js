'use strict';

describe('Controller: Example3ctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('angularAppApp'));

  var Example3ctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Example3ctrlCtrl = $controller('Example3Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.customers.length).toBe(4);
  });
});
