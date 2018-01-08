import angular from 'angular';
import uirouter from '@uirouter/angularjs'; // 'ui.router'
// import uirouter from 'angular-ui-router';

console.log('>>>>>>>>', uirouter);

import '../style/app.css';

import routing from '../app.config';
import contacts from '../modules/contacts'; // возвращает имя модуля myApp.contacts

var myApp = angular.module('myApp', [
    // 'ui.router',
    uirouter,
    contacts
    // 'ngMaterial',
    // 'ngMessages',
    // 'ngAnimate',
    // 'myApp.home',
    // 'myApp.about',
    // 'myApp.contacts',
    // 'myApp.portfolio'
]);

myApp.config(routing);
















export default myApp;