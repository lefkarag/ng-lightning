import {Component} from 'angular2/core';
import {NGL_DIRECTIVES} from '../../../../../dist/ng-lightning';

@Component({
    selector: 'demo-truncates',
    directives: [NGL_DIRECTIVES],
    template: require('./truncates.html'),
})
export class DemoTruncates {

    minSize: number = 1;
    maxSize: number=  2;
    text: string = 'hello how are you my friend?';
    heading: string = 'this is a heading';
}
