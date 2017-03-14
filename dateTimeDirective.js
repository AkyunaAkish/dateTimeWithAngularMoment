(function() {
    'use strict';

    angular.module('myApp')
        .directive('datetimeCalendar', datetimeCalendar)

    function datetimeCalendar() {
        return {
            scope: {},
            restrict: 'E',
            controller: 'dateTimeController',
            controllerAs: 'vm',
            templateUrl: '/dateTimeTemplate.html'
        }
    }
}());
