(function () {
    'use strict';

    angular
        .module('routerApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', 'AuthenticationService', 'FlashService','$scope','$window', '$cookieStore'];
    function LoginController( $state, AuthenticationService, FlashService,$scope, $window, $cookieStore) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            //console.log(vm.username);
            switch (vm.username) {
                        //finance user
                        case 'pu':
                        $state.go('fu-dashboard');
                        $('.welcomename').hide();
                        $('.welcomename.finance').show();

                        $cookieStore.put("Name", 'pu');
                        break;
                        //MD 
                        case 'md':
                        $state.go('md-dashboard');
                        $('.welcomename').hide();
                        $('.welcomename.md').show();

                        $cookieStore.put("Name", 'md');
                        break;
                        //depot incharge
                        case 'di': 
                        $state.go('di-dashboard');
                        $('.welcomename').hide();
                        $('.welcomename.depot').show();

                        $cookieStore.put("Name", 'di');
                        break;
                        //divisional_head                       
                        case 'dh':
                        $state.go('dh-dashboard');
                        $('.welcomename').hide();
                        $('.welcomename.div_head').show();

                        $cookieStore.put("Name", 'dh');
                        break;
                        //Store incharge                         
                        case 'si':
                        $state.go('si-dashboard');
                        $('.welcomename').hide();
                        $('.welcomename.store').show();

                        $cookieStore.put("Name", 'si');
                        break;
                        //Driver                       
                        case 'staff':
                        $state.go('home');
                        $('.welcomename').hide();
                        $('.welcomename.driver').show();

                        $cookieStore.put("Name", 'staff');
                        break;

                        
                    }





            /*AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    switch (vm.username) {
                        case 'admin':
                        $state.go('home');
                        break;

                        case 'about':
                        $state.go('about');
                        break;
                    }
                    //$state.go('home');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });*/
        };
    }

})();
