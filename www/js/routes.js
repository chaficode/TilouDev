angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  .state('menu', {
    url: '#',
    
        templateUrl: 'index.html',
        controller: 'menuCtrl'
    
  })

      .state('tabsController.accueil', {
    url: '/accueil',
    views: {
      'tab1': {
        templateUrl: 'templates/accueil.html',
        controller: 'accueilCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.connexion', {
    url: '/connexion',
    views: {
      'tab1': {
        templateUrl: 'templates/connexion.html',
        controller: 'connexionCtrl'
      }
    }
  })

  .state('tabsController.referidreq', {
    url: '/referidreq',
    views: {
      'tab1': {
        templateUrl: 'templates/referidreq.html',
        controller: 'referidreqCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/accueil')

  

});