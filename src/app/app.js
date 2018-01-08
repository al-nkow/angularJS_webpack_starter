import angular    from 'angular';
import uirouter   from '@uirouter/angularjs';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import ngAnimate  from 'angular-animate';

import '../style/app.css';
import routing from './app.config';
import contacts from '../modules/contacts';

var myApp = angular.module('myApp', [
    uirouter,
    contacts,
    ngMaterial,
    ngMessages,
    ngAnimate,
    // 'myApp.home',
    // 'myApp.about',
    // 'myApp.contacts',
    // 'myApp.portfolio'
]);

myApp.config(routing);
export default myApp;