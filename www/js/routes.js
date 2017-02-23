angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider

	.state('menu', {
		url : '#',

		templateUrl : 'index.html',
		controller : 'menuCtrl'

	})

	.state('tabsController.accueil', {
		url : '/accueil',
		views : {
			'tab1' : {
				templateUrl : 'templates/accueil.html',
				controller : 'accueilCtrl'
			}
		}
	})

	.state('tabsController', {
		url : '/page1',
		templateUrl : 'templates/tabsController.html',
		abstract : true
	})

	.state('tabsController.connexion', {
		url : '/connexion',
		views : {
			'tab1' : {
				templateUrl : 'templates/connexion.html',
				controller : 'connexionCtrl'
			}
		}
	})

	.state('tabsController.referidreq', {
		url : '/referidreq',
		views : {
			'tab1' : {
				templateUrl : 'templates/referidreq.html',
				controller : 'referidreqCtrl'
			}
		}
	})

//	.state('tabsController', {
//		url : '/page1',
//		templateUrl : 'templates/tabsController.html',
//		abstract : true
//	})

	.state('login', {
		url : '/login',
		templateUrl : 'templates/login.html',
		controller : 'loginCtrl'
	})

	.state('profile', {
		url : '/profile',
		templateUrl : 'templates/profile.html',
		controller : 'profileCtrl'
	})

	.state('preferences', {
		url : '/preferences',
		templateUrl : 'templates/preferences.html',
		controller : 'preferencesCtrl'
	})

	.state('home', {
		url : '/home',
		templateUrl : 'templates/home.html',
		controller : 'homeCtrl'
	})

	.state('personalInformation', {
		url : '/personal_info',
		templateUrl : 'templates/personalInformation.html',
		controller : 'personalInformationCtrl'
	})

	.state('about', {
		url : '/about',
		templateUrl : 'templates/about.html',
		controller : 'aboutCtrl'
	})

	.state('help', {
		url : '/help',
		templateUrl : 'templates/help.html',
		controller : 'helpCtrl'
	})

	.state('journal', {
		url : '/journal',
		templateUrl : 'templates/journal.html',
		controller : 'journalCtrl'
	})

	.state('graphicReport', {
		url : '/graphic_report',
		templateUrl : 'templates/graphicReport.html',
		controller : 'graphicReportCtrl'
	})

	.state('measurements', {
		url : '/measurements',
		templateUrl : 'templates/measurements.html',
		controller : 'measurementsCtrl'
	})

	.state('conctact', {
		url : '/contact',
		templateUrl : 'templates/conctact.html',
		controller : 'conctactCtrl'
	})

	.state('termsOfUse', {
		url : '/terms_of_use',
		templateUrl : 'templates/termsOfUse.html',
		controller : 'termsOfUseCtrl'
	})

	.state('consent', {
		url : '/consent',
		templateUrl : 'templates/consent.html',
		controller : 'consentCtrl'
	})

	.state('reference', {
		url : '/referenced_by',
		templateUrl : 'templates/reference.html',
		controller : 'referenceCtrl'
	})

	.state('identification', {
		url : '/given_id',
		templateUrl : 'templates/identification.html',
		controller : 'identificationCtrl'
	})

	.state('setupProfile', {
		url : '/setup_profile',
		templateUrl : 'templates/setupProfile.html',
		controller : 'setupProfileCtrl'
	})

	.state('setupPreferences', {
		url : '/setup_preferences',
		templateUrl : 'templates/setupPreferences.html',
		controller : 'setupPreferencesCtrl'
	})

	.state('measurementInstructions', {
		url : '/measurement_instructions',
		templateUrl : 'templates/measurementInstructions.html',
		controller : 'measurementInstructionsCtrl'
	})

	.state('surveyInvitation', {
		url : '/survey_invitation',
		templateUrl : 'templates/surveyInvitation.html',
		controller : 'surveyInvitationCtrl'
	})

	.state('survey', {
		url : '/survey',
		templateUrl : 'templates/survey.html',
		controller : 'surveyCtrl'
	})

	.state('information', {
		url : '/information',
		templateUrl : 'templates/information.html',
		controller : 'informationCtrl'
	})

	.state('alert', {
		url : '/alert',
		templateUrl : 'templates/alert.html',
		controller : 'alertCtrl'
	})

	.state('references', {
		url : '/references',
		templateUrl : 'templates/references.html',
		controller : 'referencesCtrl'
	})

	.state('avatar', {
		url : '/avatar',
		templateUrl : 'templates/avatar.html',
		controller : 'avatarCtrl'
	})

	$urlRouterProvider.otherwise('/home')

});