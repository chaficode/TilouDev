angular.module('app.controllers', [])

.controller('menuCtrl', [ '$scope', '$stateParams', '$translate',
/*
 * The following is the constructor function for this page's controller. See
 * https://docs.angularjs.org/guide/controller You can include any angular
 * dependencies as parameters for this function TIP: Access Route Parameters for
 * your page via $stateParams.parameterName
 * 
 */
function($scope, $stateParams, $ionicSideMenuDelegate, $translate) {

} ])

.controller(
		'homeCtrl',
		[ '$scope', '$stateParams', '$translate',
				function($scope, $stateParams, $translate) {
					$scope.ChangeLanguage = function(lang) {
						$translate.use(lang);
					}

				} ])

.controller('connexionCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('inscriptionCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('referidreqCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('profileCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('preferencesCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('personalInformationCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('aboutCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('helpCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('journalCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

			$scope.measures = [ {
				year : '2016',
				month : '1',
				day : '1',
				w : '30.59',
				h : '30.59',
				comment : 'L\'enfant ...'
			}, {
				year : '2017',
				month : '1',
				day : '1',
				w : '30.59',
				h : '30.59',
				comment : 'L\'enfant ...'
			}, {
				year : '2017',
				month : '2',
				day : '1',
				w : '30.59',
				h : '30.59',
				comment : 'L\'enfant ...'
			}, {
				year : '2017',
				month : '3',
				day : '1',
				w : '30.59',
				h : '30.59',
				comment : 'L\'enfant ...'
			}

			];

			var getYears = function(measures) {
				var years = [];

				for (var i = 0; i < measures.length; i++) {
					if(!years.includes(measures[i].year)){
						years.push(measures[i].year);
					}
				}

				return years;
			};

			$scope.years = getYears($scope.measures);

		} ])

.controller('graphicReportCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('measurementsCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('contactCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('termsOfUseCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('consentCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('referenceCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('setProfileRequest',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('setupPreferencesCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('measurementInstructionsCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('informationCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('alertCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('referencesCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])

.controller('avatarCtrl',
		[ '$scope', '$stateParams', function($scope, $stateParams) {

		} ])
