routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

export default function routing($urlRouterProvider, $locationProvider, $stateProvider) {


    // $locationProvider.html5Mode(true);

    /* OLD: $locationProvider.html5Mode({
     requireBase: false,
     enabled: true
     });*/

    $urlRouterProvider.otherwise('/'); // if no route - redirect on '/' page

    $stateProvider
        .state({
            name: 'root',
            abstract: 'true',
        })
        .state({
            name: 'root.home',
            url: '/',
            template: '<h1>This is a HOME route!</h1>',
        });
        // .state({
        //     name: 'root.about',
        //     url: '/about',
        //     template: '<h1>test2</h1>',
        // });
        // .state('contact', {
        //     url: '/contact',
        //     template: '<h1>test2</h1>',
        // });
        // .state('root', {
        //     url: '/',
        //     // abstract: 'true',
        //     views: {
        //         'content@': {
        //             templateUrl: 'templates/home/home.html',
        //             controller: 'HomeCtrl as vc'
        //         }
        //     }
        // })
        // .state('root.about', {
        //     url: 'about',
        //     views: {
        //         'content@': {
        //             templateUrl: 'templates/about/about.html',
        //             controller: 'AboutCtrl as vc'
        //         }
        //     }
        // })
        // .state('root.portfolio', {
        //     url: 'portfolio',
        //     views: {
        //         'content@': {
        //             templateUrl: 'templates/portfolio/portfolio.html',
        //             controller: 'PortfolioCtrl as vc'
        //         }
        //     }
        // })
        // .state('root.portfolio.sota', {
        //     url: '/sota',
        //     views: {
        //         'content@': {
        //             templateUrl: 'templates/sota/sota.html',
        //             controller: 'SotaCtrl as vc'
        //         }
        //     }
        // })
        // .state('root.portfolio.fitness', {
        //     url: '/fitness',
        //     views: {
        //         'content@': {
        //             templateUrl: 'templates/fitness/fitness.html',
        //             controller: 'FitnessCtrl as vc'
        //         }
        //     }
        // })
        // .state('root.contacts', {
        //     url: 'contacts',
        //     views: {
        //         'content@': {
        //             templateUrl: 'templates/contacts/contacts.html',
        //             controller: 'ContactsCtrl as vc'
        //         }
        //     }
        // });

}

