define(['angular', 'angular-route'], (angular) => {
  'use strict';

  // Declare app level module which depends on filters, and services
  return angular.module('App', [
    'ngRoute',
    'App.services',
    'App.directives',
    'App.providers',
    'App.filters',
  	'App.controllers'
	]);
});
