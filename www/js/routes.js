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

	.state('tabsController.inscription', {
		url : '/inscription',
		views : {
			'tab1' : {
				templateUrl : 'templates/inscription.html',
				controller : 'inscriptionCtrl'
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

	.state('tabsController.profile', {
		url : '/profile',
		views : {
			'tab1' : {
				templateUrl : 'templates/profile.html',
				controller : 'profileCtrl'
			}
		}
	})

	.state('tabsController.preferences', {
		url : '/preferences',
		views : {
			'tab1' : {
				templateUrl : 'templates/preferences.html',
				controller : 'preferencesCtrl'
			}
		}
	})

	.state('home', {
		url : '/home',
		templateUrl : 'templates/home.html',
		controller : 'homeCtrl'
	})

	.state('tabsController.personalInformation', {
		url : '/personal_info',
		views : {
			'tab1' : {
				templateUrl : 'templates/personal_information.html',
				controller : 'personalInformationCtrl'
			}
		}
	})

	.state('tabsController.about', {
		url : '/about',
		views : {
			'tab1' : {
				templateUrl : 'templates/about.html',
				controller : 'aboutCtrl'
			}
		}
	})

	.state('tabsController.help', {
		url : '/help',
		views : {
			'tab1' : {
				templateUrl : 'templates/help.html',
				controller : 'helpCtrl'
			}
		}
	})

	.state('tabsController.journal', {
		url : '/journal',
		views : {
			'tab1' : {
				templateUrl : 'templates/journal.html',
				controller : 'journalCtrl'
			}
		}
	})

	.state('tabsController.graphicReport', {
		url : '/graphic_report',
		views : {
			'tab1' : {
				templateUrl : 'templates/graphic_report.html',
				controller : 'graphicReportCtrl'
			}
		}
	})

	.state('tabsController.measurements', {
		url : '/measurements',
		views : {
			'tab1' : {
				templateUrl : 'templates/measurements.html',
				controller : 'measurementsCtrl'
			}
		}
	})

	.state('tabsController.contact', {
		url : '/contact',
		views : {
			'tab1' : {
				templateUrl : 'templates/contact.html',
				controller : 'contactCtrl'
			}
		}
	})

	.state('tabsController.termsOfUse', {
		url : '/terms_of_use',
		views : {
			'tab1' : {
				templateUrl : 'templates/terms_of_use.html',
				controller : 'termsOfUseCtrl'
			}
		}
	})

	.state('tabsController.consent', {
		url : '/consent',
		views : {
			'tab1' : {
				templateUrl : 'templates/consent.html',
				controller : 'consentCtrl'
			}
		}
	})

	.state('tabsController.reference', {
		url : '/referenced_by',
		views : {
			'tab1' : {
				templateUrl : 'templates/reference.html',
				controller : 'referenceCtrl'
			}
		}
	})

	.state('tabsController.setProfileRequest', {
		url : '/setup_profile',
		views : {
			'tab1' : {
				templateUrl : 'templates/set_profile_request.html',
				controller : 'setProfileRequestCtrl'
			}
		}
	})

	.state('tabsController.setupPreferences', {
		url : '/setup_preferences',
		views : {
			'tab1' : {
				templateUrl : 'templates/setup_preferences.html',
				controller : 'setupPreferencesCtrl'
			}
		}
	})

	.state('tabsController.measurementInstructions', {
		url : '/measurement_instructions',
		views : {
			'tab1' : {
				templateUrl : 'templates/measurement_instructions.html',
				controller : 'measurementInstructionsCtrl'
			}
		}
	})

	.state('tabsController.information', {
		url : '/information',
		views : {
			'tab1' : {
				templateUrl : 'templates/information.html',
				controller : 'informationCtrl'
			}
		}
	})

	.state('tabsController.alert', {
		url : '/alert',
		views : {
			'tab1' : {
				templateUrl : 'templates/alert.html',
				controller : 'alertCtrl'
			}
		}
	})

	.state('tabsController.references', {
		url : '/references',
		views : {
			'tab1' : {
				templateUrl : 'templates/references.html',
				controller : 'referencesCtrl'
			}
		}
	})

	.state('tabsController.avatar', {
		url : '/avatar',
		views : {
			'tab1' : {
				templateUrl : 'templates/avatar.html',
				controller : 'avatarCtrl'
			}
		}
	})

	$urlRouterProvider.otherwise('/home')

});