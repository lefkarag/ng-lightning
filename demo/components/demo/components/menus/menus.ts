import {Component} from 'angular2/core';
import {NGL_DIRECTIVES} from '../../../../../dist/ng-lightning';

@Component({
    selector: 'demo-menus',
    directives: [NGL_DIRECTIVES],
    template: require('./menus.html'),
})
export class DemoMenus {}
