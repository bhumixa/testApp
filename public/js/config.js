/**
 * INSPINIA - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
 //global Config variables for the project



function config($stateProvider, $urlRouterProvider, $httpProvider) {
   

    $stateProvider
        /*.state('dashboards', {
           // abstract: true,
            url: "/dashboards",
            //templateUrl: "views/common/content.html",
            templateUrl:'/content'
        })*/
        .state('dashboards', {
           // abstract: true,
            url: "/dashboards",
            //templateUrl: "views/common/content.html",
            templateUrl:'/content'
        })
        .state('dashboards.main', {
           // abstract: true,
            url: "/main",
            templateUrl: "/dashboard",
        })
        .state('dashboards.new', {
           // abstract: true,
            url: "/new",
            templateUrl: "/new",
        });
        
        
}
angular
    .module('test')
    .config(config)
    /*.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }])*/
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
