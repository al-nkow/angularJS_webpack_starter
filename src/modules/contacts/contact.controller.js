export default class ContactController {
    constructor() {
        this.name = 'World';
    }

    changeName() {
        this.name = 'angular-tips';
        console.log('CONTACT CONTROLLER WORKS!!!!!');
    }
}