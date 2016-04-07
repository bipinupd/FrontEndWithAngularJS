describe('angularAppApp', function () {
    var element;
    beforeEach(function () {
        module('angularAppApp');
        element = angular.element('<custom-a-c-e> </custom-a-c-e>');
    	inject(function ($rootScope, $compile) {
            var scope = $rootScope.$new();
			$compile(element)(scope);
			scope.$digest();
		});
    });
    it('check the content of directive', function () {
        expect(element.text()).toBe('This is static content !');
    });
});
