// define angular
angular.module('socially',['angular-meteor', 'ui.router']);

// config
angular.module("socially").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
function($urlRouterProvider, $stateProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('parties', {
      url: '/parties',
      templateUrl: 'parties-list.ng.html',
      controller: 'PartiesListCtrl'
    })
    .state('partyDetails', {
      url: '/parties/:partyId',
      templateUrl: 'party-details.ng.html',
      controller: 'PartyDetailsCtrl'
    });

  $urlRouterProvider.otherwise("/parties");
}]);

// controller
angular.module("socially").controller("PartiesListCtrl", ['$scope', '$meteor',
function($scope, $meteor){

  $scope.parties = $meteor.collection(Parties);

  $scope.remove = function(party){
    $scope.parties.remove(party);
  };

  $scope.removeAll = function(){
    $scope.parties.remove();
  };

}]);

// controller
angular.module("socially").controller("PartyDetailsCtrl", ['$scope', '$stateParams', '$meteor',
function($scope, $stateParams, $meteor){

  $scope.party = $meteor.object(Parties, $stateParams.partyId, false);

  $scope.save = function() {
    $scope.party.save().then(function(numberOfDocs){
      console.log('save success doc affected ', numberOfDocs);
    }, function(error){
      console.log('save error', error);
    });
  };

  $scope.reset = function() {
    $scope.party.reset();
  };

}]);