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

	.state('tabsController.login', {
		url : '/login',
		views : {
			'tab1' : {
				templateUrl : 'templates/login.html',
				controller : 'loginCtrl'
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
				templateUrl : 'templates/graphicReport.html',
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
				templateUrl : 'templates/termsOfUse.html',
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

	.state('tabsController.identification', {
		url : '/given_id',
		views : {
			'tab1' : {
				templateUrl : 'templates/identification.html',
				controller : 'identificationCtrl'
			}
		}
	})

	.state('tabsController.setupProfile', {
		url : '/setup_profile',
		views : {
			'tab1' : {
				templateUrl : 'templates/setupProfile.html',
				controller : 'setupProfileCtrl'
			}
		}
	})

	.state('tabsController.setupPreferences', {
		url : '/setup_preferences',
		views : {
			'tab1' : {
				templateUrl : 'templates/setupPreferences.html',
				controller : 'setupPreferencesCtrl'
			}
		}
	})

	.state('tabsController.measurementInstructions', {
		url : '/measurement_instructions',
		views : {
			'tab1' : {
				templateUrl : 'templates/measurementInstructions.html',
				controller : 'measurementInstructionsCtrl'
			}
		}
	})

	.state('tabsController.surveyInvitation', {
		url : '/survey_invitation',
		views : {
			'tab1' : {
				templateUrl : 'templates/surveyInvitation.html',
				controller : 'surveyInvitationCtrl'
			}
		}
	})

	.state('tabsController.survey', {
		url : '/survey',
		views : {
			'tab1' : {
				templateUrl : 'templates/survey.html',
				controller : 'surveyCtrl'
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