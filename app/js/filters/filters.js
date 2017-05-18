define(['angular'], () => {
    'use strict';

  angular.module('App.filters', [])
    .filter('interpolate', ['version', (version) => {
        return function (text) {
          return String(text).replace(/\%VERSION\%/mg, version);
        };
      } ]);
});
