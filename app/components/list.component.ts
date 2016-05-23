import { Component } from '@angular/core';
import { AppComponent } from './app.component';

// The ListComponent metadata defines the component's selector,
// the url of the template and the directives used in this template.
@Component({
    selector: 'sp-list',
    templateUrl: './templates/list.html',
    directives: [ AppComponent ]
})

export class ListComponent { }