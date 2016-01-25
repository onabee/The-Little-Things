angular.module('LittleThings').controller('CharitiesController', CharitiesController);

CharitiesController.$inject = ['$http'];

function CharitiesController($http){
  var charities = this;

  charities.all = [];

  // If eligible=1 then only organizations that are in good standing with the IRS and are tax deductible will be returned to your  application or website
  // want a user to enter their location and be able to see charity organizations near them

  charities.fetch = function(){
    // if zip code is 10010 url string = /api?zipCode=10010
    $http
      .get('/api?city=' + charities.city + '&state=' + charities.state + '&zipCode=' + charities.zip)
      .then(function(response){
        console.log(response.data.data);
        charities.all = response.data.data;
        // charities.all.push(charity);
      });
    // charities.search = city + state || zip;

    // clear input fields after submit
    // can also be clicked by pressing enter key
  };
};