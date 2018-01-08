routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {

    $stateProvider
        .state('root.contact', {
            url: '/contacts',
            template: require('./contact.template.pug'),
            controller: 'ContactController',
            controllerAs: 'vc'
        });
}