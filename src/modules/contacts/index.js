import './contact.styles.styl';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './contact.routes';
import ContactController from './contact.controller';

export default angular.module('myApp.contacts', [uirouter])
    .config(routing)
    .controller('ContactController', ContactController)
    .name;