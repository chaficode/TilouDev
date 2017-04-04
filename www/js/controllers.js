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

			$scope.yearly_measures = [ {
				year : '2016',
				montly_measures : [ {
					month : '1',
					daily_measures:[
						{
							day:'1',
							w:'1',
							h:'1',
							comment:'c1'
						},
						{
							day:'2',
							w:'2',
							h:'2',
							comment:'c2'
						}]

				},
				{
					month : '3',
					daily_measures:[
						{
							day:'10',
							w:'1',
							h:'1',
							comment:'c1'
						},
						{
							day:'25',
							w:'2',
							h:'2',
							comment:'c2'
						}]

				}]

			} ];

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
