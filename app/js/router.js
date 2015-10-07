"use strict";
angular.module("INTERVIEWTest").config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/"),
        $stateProvider
        .state("home", {
            url: "/",
            controller: function($scope) {
                $scope.map = {
                    center: {
                        latitude: 45,
                        longitude: -73
                    },
                    zoom: 8
                };
            },
            templateUrl: "views/home.html"
        })
}]);
