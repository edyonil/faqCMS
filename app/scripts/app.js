'use strict';

/**
 * @ngdoc overview
 * @name faqCmsApp
 * @description
 * # faqCmsApp
 *
 * Main module of the application.
 */
angular
  .module('faqCmsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,uriConfig) {
        //console.log(uriConfig.defaultUrl);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function(){

  });
