/**
 * Created by Administrator on 2017/11/6.
 */
angular.module('myBlog', ['ngRoute'])
    .controller('HomeController', function ($scope, $route) { $scope.$route = $route;})
    .controller('AboutController', function ($scope, $route) { $scope.$route = $route;})
    .config(function ($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'template/css-part.html',
            controller: 'HomeController'
        }).
        when('/about', {
            templateUrl: 'template/html-part.html',
            controller: 'AboutController'
        }).
        otherwise({
            redirectTo: '/home'
        });
    });