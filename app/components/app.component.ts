import { Component } from '@angular/core';

import { MdButton } from '@angular2-material/button';
import { MdCheckbox } from '@angular2-material/checkbox';

@Component({
    selector: 'rm-app',
    templateUrl: 'app/components/app.component.html',
    directives: [MdButton, MdCheckbox]
})
export class AppComponent {
    todos = [
        {
            completed: false,
            name: 'One'
        },{
            completed: false,
            name: 'Second'
        },{
            completed: false,
            name: 'Third'
        },

    ];
}