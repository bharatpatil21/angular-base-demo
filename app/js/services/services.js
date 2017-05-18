define(['angular'], (angular) => {
  'use strict';

  var services = angular.module('App.services', []).value('version', '0.1');
  return services;
});
