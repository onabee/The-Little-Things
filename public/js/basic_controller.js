(function(){
  'use strict';

  angular.module('LittleThings').controller('BasicController', BasicController);

  function MainController($http){

    $http.get('/config').then(saveConfig).catch(handleError);
  }
})();