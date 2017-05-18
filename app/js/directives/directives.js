define(['angular'], (angular) => {
  'use strict';

  var directives = angular.module('App.directives', [])
      .directive('appVersion', ['version', (version) => {
          return function (scope, elm, attrs) {
            elm.text(version);
          };
      } ]);

  return directives;
});
