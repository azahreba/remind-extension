import { Component } from '@angular/core';

import { MdButton } from '@angular2-material/button';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdProgressCircle, MdSpinner } from '@angular2-material/progress-circle';

@Component({
    selector: 'rm-app',
    templateUrl: 'app/components/app.component.html',
    directives: [MdButton, MdCheckbox, MdProgressCircle, MdSpinner]
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