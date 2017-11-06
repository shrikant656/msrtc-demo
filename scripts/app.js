'use strict';

(function(){

    var routerApp = angular.module('routerApp', ['ngAnimate','ui.select', 'ngSanitize', 'ui.bootstrap','ui.router','ngCookies','pascalprecht.translate','oitozero.ngSweetAlert', 'chart.js']);
      
    routerApp.config(function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      colors: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
    });
    // Configure all doughnut charts
    ChartJsProvider.setOptions('doughnut', {
      cutoutPercentage: 40
    });
   
  });
      
    routerApp.config(function($stateProvider, $urlRouterProvider,$translateProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
                url: '/login',
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })
	
            .state('register', {
                url: '/register',
                controller: 'RegisterController',
                templateUrl: 'register/register.view.html',
                controllerAs: 'vm'
            })
            
        .state('home', {
            url: '/home',
            templateUrl: 'template/joining.html'
            //controller: 'HomeController'
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'template/dashboard.html'
        })
        .state('marathi-dashboard', {
            url: '/marathi-dashboard',
            templateUrl: 'template/marathi-dashboard.html'
        })
		.state('km-home', {
            url: '/km-home',
            templateUrl: 'template/km-home.html'
        })
		.state('km-search', {
            url: '/km-search',
            templateUrl: 'template/km-search.html'
        })
		.state('km-user-inbox', {
            url: '/km-user-inbox',
            templateUrl: 'template/km-user-inbox.html'
        })
		.state('eg-correspondence', {
            url: '/eg-correspondence',
            templateUrl: 'template/eg-correspondence.html'
        })
		.state('eg-correspondence2', {
            url: '/eg-correspondence2',
            templateUrl: 'template/eg-correspondence2.html'
        })
		.state('eg-user-inbox', {
            url: '/eg-user-inbox',
            templateUrl: 'template/eg-user-inbox.html'
        })
		.state('eg-register', {
            url: '/eg-register',
            templateUrl: 'template/eg-register.html'
        })
		.state('eg-register2', {
            url: '/eg-register2',
            templateUrl: 'template/eg-register2.html'
        })
		.state('eg-file', {
            url: '/eg-file',
            templateUrl: 'template/eg-file.html'
        })
		.state('eg-pop-up', {
            url: '/eg-pop-up',
            templateUrl: 'template/eg-pop-up.html'
        })
		.state('eg-landing-page', {
            url: '/eg-landing-page',
            templateUrl: 'template/eg-landing-page.html'
        })
        .state('leave-dashboard', {
            url: '/leave-dashboard',
            templateUrl: 'template/leave-dashboard.html'
        })
		.state('km-discussion-board', {
            url: '/km-discussion-board',
            templateUrl: 'template/km-discussion-board.html'
        })
		.state('km-document-upload', {
            url: '/km-document-upload',
            templateUrl: 'template/km-document-upload.html'
        })
        .state('payslip', {
            url: '/payslip',
            templateUrl: 'template/payslip.html'
        })
        .state('user-profile', {
            url: '/user-profile',
            templateUrl: 'template/user-profile.html'
        })
        .state('create-leave', {
            url: '/create-leave',
            templateUrl: 'template/create-leave.html'
        })
        .state('leave-review', {
            url: '/leave-review',
            templateUrl: 'template/leave-review.html'
        })
        .state('leave-notification', {
            url: '/leave-notification',
            templateUrl: 'template/leave-notification.html'
        })
        .state('resignation', {
            url: '/resignation',
            templateUrl: 'template/resignation.html'
        })
        .state('create-expense-report-general-information', {
            url: '/create-expense-report-general-information',
            templateUrl: 'template/create-expense-report-general-information.html'
        })
        .state('fu-dashboard', {
            url: '/fu-dashboard',
            templateUrl: 'template/fu-dashboard.html'
        })
        .state('di-dashboard', {
            url: '/di-dashboard',
            templateUrl: 'template/di-dashboard.html'
        })
        .state('si-dashboard', {
            url: '/si-dashboard',
            templateUrl: 'template/si-dashboard.html'
        })
        .state('si-fuel-dispense', {
            url: '/si-fuel-dispense',
            templateUrl: 'template/si-fuel-dispense.html'
        })
        .state('tender', {
            url: '/tender',
            templateUrl: 'template/tender.html'
        })
        .state('ivms-general', {
            url: '/ivms-general',
            templateUrl: 'template/ivms-general.html'
        })
        .state('list-empanellment', {
            url: '/list-empanellment',
            templateUrl: 'template/list-empanellment.html'
        })
        .state('maintain-empanellment', {
            url: '/maintain-empanellment',
            templateUrl: 'template/maintain-empanellment.html'
        })
        .state('rate-contract', {
            url: '/rate-contract',
            templateUrl: 'template/rate-contract.html'
        })
		.state('km-dashboard', {
            url: '/km-dashboard',
            templateUrl: 'template/km-dashboard.html'
        })
        .state('sr-request', {
            url: '/sr-request',
            templateUrl: 'template/sr-request.html'
        })
        .state('proforma-invoice-dashboard', {
            url: '/proforma-invoice-dashboard',
            templateUrl: 'template/proforma-invoice-dashboard.html'
        })
        .state('inventory-management', {
            url: '/inventory-management',
            templateUrl: 'template/inventory-management.html'
        })
        .state('update-proforma-invoice-status', {
            url: '/update-proforma-invoice-status',
            templateUrl: 'template/update-proforma-invoice-status.html'
        })
        .state('update-proforma-invoice-status2', {
            url: '/update-proforma-invoice-status2',
            templateUrl: 'template/update-proforma-invoice-status2.html'
        })
        .state('grn-list', {
            url: '/grn-list',
            templateUrl: 'template/grn-list.html'
        })
        .state('create-new-grn', {
            url: '/create-new-grn',
            templateUrl: 'template/create-new-grn.html'
        })
        .state('service-creation', {
            url: '/service-creation',
            templateUrl: 'template/service-creation.html'
        })
        .state('approval', {
            url: '/approval',
            templateUrl: 'template/approval.html'
        })
        .state('po-listing', {
            url: '/po-listing',
            templateUrl: 'template/po-listing.html'
        })
        .state('create-po', {
            url: '/create-po',
            templateUrl: 'template/create-po.html'
        })
        .state('tender-listing', {
            url: '/tender-listing',
            templateUrl: 'template/tender-listing.html'
        })
        .state('legal-case-listing', {
            url: '/legal-case-listing',
            templateUrl: 'template/legal-case-listing.html'
        })
        .state('legal-case-details', {
            url: '/legal-case-details',
            templateUrl: 'template/legal-case-details.html'
        })
        .state('proforma-invoice-configuration', {
            url: '/proforma-invoice-configuration',
            templateUrl: 'template/proforma-invoice-configuration.html'
        })
		.state('knowledge-management', {
            url: '/knowledge-management',
            templateUrl: 'template/knowledge-management.html'
        })
        .state('inventory-request', {
            url: '/inventory-request',
            templateUrl: 'template/inventory-request.html'
        })
        .state('inventory-details', {
            url: '/inventory-details',
            templateUrl: 'template/inventory-details.html'
        })
        .state('dh-inventory', {
            url: '/dh-inventory',
            templateUrl: 'template/dh-inventory.html'
        })
        .state('dh-inventory-details', {
            url: '/dh-inventory-details',
            templateUrl: 'template/dh-inventory-details.html'
        })
        .state('dh-request', {
            url: '/dh-request',
            templateUrl: 'template/dh-request.html'
        })
        .state('fu-inventory', {
            url: '/fu-inventory',
            templateUrl: 'template/fu-inventory.html'
        })
        .state('fu-inventory-details', {
            url: '/fu-inventory-details',
            templateUrl: 'template/fu-inventory-details.html'
        })
        .state('fu-request', {
            url: '/fu-request',
            templateUrl: 'template/fu-request.html'
        })
        .state('fu-create-po', {
            url: '/fu-create-po',
            templateUrl: 'template/fu-create-po.html'
        })
        .state('fu-proforma-invoice-configuration', {
            url: '/fu-proforma-invoice-configuration',
            templateUrl: 'template/fu-proforma-invoice-configuration.html'
        })
        .state('fu-grn-report', {
            url: '/fu-grn-report',
            templateUrl: 'template/fu-grn-report.html'
        })
        .state('md-dashboard', {
            url: '/md-dashboard',
            templateUrl: 'template/md-dashboard.html'
        })
        .state('dh-dashboard', {
            url: '/dh-dashboard',
            templateUrl: 'template/dh-dashboard.html'
        })
        .state('di-dashboard01', {
            url: '/di-dashboard01',
            templateUrl: 'template/di-dashboard01.html'
        })
        .state('di-request', {
            url: '/di-request',
            templateUrl: 'template/di-request.html'
        })
        .state('invoice-entry', {
            url: '/invoice-entry',
            templateUrl: 'template/invoice-entry.html'
        })
        .state('scrutiny', {
            url: '/scrutiny',
            templateUrl: 'template/scrutiny.html'
        })
        .state('provision', {
            url: '/provision',
            templateUrl: 'template/provision.html'
        })
        .state('invoice-booking', {
            url: '/invoice-booking',
            templateUrl: 'template/invoice-booking.html'
        })
       /*.state('form', {
            url: '/form',
            templateUrl: 'template/form/form.html',
            controller: 'formController'
        })*/

        /*.state('home-en', {
            url: '/home-en',
            templateUrl: 'template/home/home-en.html',
            controller: 'LangCtrl'
        })
        .state('home-hn', {
            url: '/home-hn',
            templateUrl: 'template/home/home-hn.html',
            controller: 'LangCtrl'
        })*/
        // nested list with custom controller
        /*.state('home.list', {
            url: '/list',
            templateUrl: 'template/home/home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        .state('home.accordion', {
            url: '/accordion',
            templateUrl: 'template/accordion/accordion.html',
            controller: 'AccordionDemoCtrl'
        })
        // nested list with just some random string data
        .state('home.carousel', {
            url: '/carousel',
            templateUrl: 'template/carousel/carousel.html',
        })

        .state('home.others', {
            url: '/others',
            templateUrl: 'template/others/others.html',
        })

        .state('home.pagination', {
            url: '/pagination',
            templateUrl: 'template/pagination/pagination.html',
        })*/

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                    // the main template will be placed here (relatively named)
                    '': { templateUrl: 'template/about/about.html' },

                    // the child views will be defined here (absolutely named)
                    'columnOne@about': { template: 'Look I am a column!' },

                    // for column two, we'll define a separate controller 
                    'columnTwo@about': { 
                        templateUrl: 'template/table-data.html',
                        controller: 'scotchController'
                    }
                }
        });


        // add translation tables
        $translateProvider.translations('English', translationsEN);
        $translateProvider.translations('Marathi', translationsHN);
        $translateProvider.registerAvailableLanguageKeys(['English', 'Marathi'], {
          'en_US': 'English',
          'en_UK': 'English',
          'en_*': 'English'
        });
        
        $translateProvider.determinePreferredLanguage();
        //$translateProvider.preferredLanguage('en');
        $translateProvider.fallbackLanguage('English');
        
        // remember language
        $translateProvider.useCookieStorage();

        $translateProvider.useSanitizeValueStrategy();
        //$translateProvider.useSanitizeValueStrategy('sanitize');
    });

    routerApp.run(function($rootScope, $cookieStore, $http,$state) {
      // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$stateChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($state.go(), ['login', 'register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $state.go('login');
            }
        });
    })

    routerApp.controller('LangCtrl', ['$translate', '$scope','$state','$window', '$cookieStore', function ($translate, $scope, $state,$window,$cookieStore ){


        $scope.RemoveCookie = function () {
            console.log('cookie removed');
                $cookieStore.remove('Name');
            };

        $scope.products = [{
          lang: 'English'
        }, {
          lang: 'Marathi'
        }]

        console.log($cookieStore.get('Name')+' cookie');
            var ucookie = $cookieStore.get('Name');
                switch (ucookie) {
                        //finance user
                        case 'pu':
                        $('.welcomename').hide();
                        $('.welcomename.finance').show();
                        break;
                        //MD 
                        case 'md':
                        $('.welcomename').hide();
                        $('.welcomename.md').show();
                        break;
                        //depot incharge
                        case 'di': 
                        $('.welcomename').hide();
                        $('.welcomename.depot').show();
                        break;
                        //divisional_head                       
                        case 'dh':
                        $('.welcomename').hide();
                        $('.welcomename.div_head').show();
                        break;
                        //Store incharge                         
                        case 'si':
                        $('.welcomename').hide();
                        $('.welcomename.store').show();
                        break;
                        //Driver                       
                        case 'staff':
                        $('.welcomename').hide();
                        $('.welcomename.driver').show();
                        break;
                    }

        var currentLang = $translate.proposedLanguage() || $translate.use();
        $scope.sellang = currentLang;

        /*var urls = (location.href).split('/');
            var furls = urls[urls.length - 1];
            
            if(furls == 'km-dashboard'||furls == 'km-discussion-board'){
                console.log(furls+' df');
                $('.staffTraining').addClass('mactives');
            } else{
                $('.staffTraining').removeClass('mactives');
            }*/

        console.log(currentLang + ' currentLang')
        //$scope.productList = 'English';
        //console.log(currentLang + ' currentLang');
        /*var mainUrl = window.location.href;
          
          var match = mainUrl.substr(mainUrl.lastIndexOf('/')+1).split('-').pop();
          console.log(match + ' match');
          var replacedUrlEN = mainUrl.replace('hn','en');
          var replacedUrlHN = mainUrl.replace('en','hn');
           
          if((match !== '') && (match !== 'hn') && (match !== 'en')){
              var replacedUrl = (currentLang == 'Marathi') ? (window.location.href + '-hn') : (window.location.href + '-en');
              window.location.href = replacedUrl;
            }else if(match == 'hn' && currentLang == 'English'){
            window.location.href = replacedUrlEN;
          } else if(match == 'en' && currentLang == 'Marathi'){
            window.location.href = replacedUrlHN;
          } */
      $scope.selectLanguage = function(langKey){
      if (langKey === 'English') {
          $translate.fallbackLanguage('English');
          console.log(langKey);

          var url = (location.href).split('/');
            var furl = url[url.length - 1];

        if(furl == 'marathi-dashboard' && langKey == 'English'){
            $state.go('dashboard');
            console.log(furl+' eng');
        }

        } else if (langKey == 'Marathi') {
          $translate.fallbackLanguage('Marathi');
          console.log(langKey);

          var url = (location.href).split('/');
        var furl = url[url.length - 1];
        //console.log(furl);
        if(furl == 'dashboard' && langKey == 'Marathi'){
            console.log(furl +' marathi');
            $state.go('marathi-dashboard');
        }
            
        }
        $translate.use(langKey);
        //location.reload();
      };

      $scope.persondetails = function(){
        swal({
          //title:'Deleted!',
          title:'Your details has been updated successfully.',
          type: 'success'
        },function(){
            $state.go('dashboard');
        })
      }

      $scope.leaveSubmit = function(){
        swal({
          //title:'Deleted!',
          title:'Your leave request has been submitted successfully.',
          type: 'success'
        },function(){
            $state.go('dashboard');
        })
      }
      
      $scope.legalSubmit = function(){
        swal({
          //title:'Deleted!',
          title:'Your request has been submitted successfully.',
          type: 'success'
        },function(){
            $state.go('legal-case-listing');
        })
      }
      
      $scope.ivmsSubmit = function(){
        swal({
          //title:'Deleted!',
          title:'Your request has been submitted successfully.',
          type: 'success'
        },function(){
            $state.go('ivms-general');
        })
      }
       $scope.ivmsreqSubmit = function(){
        swal({
          //title:'Deleted!',
          title:'Your request has been submitted successfully.',
          type: 'success'
        },function(){
            $state.go('inventory-request');
        })
      }
       $scope.dhinvSubmit = function(){
        swal({
          //title:'Deleted!',
          title:'Your request has been submitted successfully.',
          type: 'success'
        },function(){
            $state.go('dh-inventory');
        })
      }
       $scope.fureqSubmit = function(){
        swal({
          //title:'Deleted!',
          title:'Your request has been submitted successfully.',
          type: 'success'
        },function(){
            $state.go('fu-inventory');
        })
      }
      $scope.performaSubmit = function(){
        swal({
          //title:'Deleted!',
          title:'Your request has been submitted successfully.',
          type: 'success'
        },function(){
            $state.go('proforma-invoice-dashboard');
        })
      }
      $scope.rateSubmit = function(){
        swal({
          //title:'Deleted!',
          title:'Your request has been submitted successfully.',
          type: 'success'
        },function(){
            $state.go('tender-listing');
        })
      }
      $scope.srSubmit = function(){
        swal({
          //title:'Deleted!',
          title:'Your request has been submitted successfully.',
          type: 'success'
        },function(){
            $state.go('sr-request');
        })
      }
      $scope.dhSubmit = function(){
        swal({
          //title:'Deleted!',
          title:'Your request has been submitted successfully.',
          type: 'success'
        },function(){
            $state.go('dh-request');
        })
      }
      $scope.fuSubmit = function(){
        swal({
          //title:'Deleted!',
          title:'Your request has been submitted successfully.',
          type: 'success'
        },function(){
            $state.go('fu-request');
        })
      }

      
    }]);


    routerApp.controller('tabController', function($scope) {

        this.tab = 1;
        this.subTab = 6;
        this.showDiv = 1;
        this.showSubDiv = 6;
        
        this.selectedTab = function(selected){
          this.tab = selected;
          this.showDiv = 1;
        };
        this.isSelected = function(newVal){
          return this.tab === newVal;
        };
        
        this.selectedSubTab = function(selected){
          this.subTab = selected;
        };
        this.isSubSelected = function(newVal){
          return this.subTab === newVal;
        };
        
        this.toggleDiv = function(divId, subDivId){
          this.showDiv = divId;
          this.selectedSubTab(subDivId);
          this.isSubSelected(subDivId);
        };
        this.isDivDisplayed = function(val){
          return this.showDiv === val;
        };
        this.isSubDivDisplayed = function(val){
          return this.showSubDiv === val;
        };

        this.toggleDiv(this.showDiv, this.showSubDiv);
        
        

      $scope.expReportSubmit = function(){
        swal({
          //title:'Deleted!',
          title:'Your expense report has been created successfully.',
          type: 'success'
        },function(){
            
            //$state.go('create-expense-report-general-information');
        });
      }
        
    });
    
    routerApp.controller('DoughnutCtrla', ['$scope', '$timeout', function ($scope, $timeout) {
            $scope.labels = ['Facebook','Twitter','LinkedIn','Google+'];
            $scope.data = [500000,350000,25000,15000];
            $scope.colors = ['#365A94','#00B7F0','#f5d800','#377fc7'];
            $scope.options = {
              //legend: { display: true,position: "right" },
                
        };

        /*$scope.newRec = [
          {'color':'#ec3e40','label':'Total Data','data':'500000'},
          {'color':'#ff9b2b','label':'Data Mapped','data':'450000'},
          {'color':'#f5d800','label':'Orphan data mapped','data':'35000'},
          {'color':'#377fc7','label':'Orphan data','data':'15000'}
        ]*/

        var dataLabel = ['Total Data','Data Mapped','Orphan data mapped','Orphan data'];
        var dataValue = [500000,450000,35000,15000];
        var dataColors = ['#ec3e40','#ff9b2b','#f5d800','#377fc7'];

        var newRecd = dataValue.map( function(x, i, z){
            return {"label": dataLabel[i],"value": x, "color": dataColors[i]}        
        }.bind(this));
                        
        //console.log(newRecd);
        $scope.newRec = newRecd;

        $timeout(function () {
          $scope.data = [500000,450000,35000,15000];
        }, 500);
    }]);

    routerApp.controller('DoughnutCtrlb', ['$scope', '$timeout', function ($scope, $timeout) {
            $scope.labels = ['Present','absent'];
            $scope.data = [500000,350000];
            $scope.colors = ['#365A94','#00B7F0'];
            $scope.options = {
                
        };

        var dataLabel = ['Present','absent'];
        var dataValue = [500000,350000];
        var dataColors = ['#ec3e40','#ff9b2b'];

    }]);

    routerApp.directive('dtpicker',function(){
      return {
        link: function(scope, element, attrs){
          $('.datepickers').datepicker({
              format: "dd/mm/yyyy",
              autoclose: true
            });
        }
      }
    })

    jQuery(document).ready(function ($) {
        $(window).scroll(function () {

            if ($(window).scrollTop() >= 100) {
                $('.menu_header').addClass('fixmenuhdr');
                $('.scroll').show();
            } else {
                $('.menu_header').removeClass('fixmenuhdr');
                $('.scroll').hide();
            }
        });

        $('body').on('click', '.scroll', function (event) { 
            event.preventDefault();
            $('html,body').animate({ scrollTop: 0 }, '500', 'swing', function () { });
        });
    });

})()