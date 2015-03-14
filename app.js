Parties = new Mongo.Collection("parties");

if (Meteor.isClient) {
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
        $scope.party.save();
      };

      $scope.reset = function() {
        $scope.party.reset();
      };
  }]);
// end of client code
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Parties.find().count() === 0) {

      var parties = [
        {'name': 'Dubstep-Free Zone',
          'description': 'Can we please just for an evening not listen to dubstep.'},
        {'name': 'All dubstep all the time',
          'description': 'Get it on!'},
        {'name': 'Savage lounging',
          'description': 'Leisure suit required. And only fiercest manners.'}
      ];

      for (var i = 0; i < parties.length; i++)
        Parties.insert({name: parties[i].name, description: parties[i].description});

    }
   });
}