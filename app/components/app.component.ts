import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import {MdButton} from '@angular2-material/button';
import {MdCard} from '@angular2-material/card';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdInput} from '@angular2-material/input';
import {MdProgressCircle, MdSpinner} from '@angular2-material/progress-circle';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdToolbar} from '@angular2-material/toolbar';

@Component({
    selector: 'rm-app',
    templateUrl: 'app/components/app.component.html',
    directives: [
        MdButton,
        MdCard,
        MdCheckbox,
        MdIcon,
        MdInput,
        MdProgressCircle,
        MD_SIDENAV_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MdSpinner,
        MdToolbar
    ],
    styleUrls: ['app/components/app.component.css'],
    providers: [HTTP_PROVIDERS, MdIconRegistry]
})

export class AppComponent {
    todos = [
        {
            completed: false,
            name: 'One'
        }, {
            completed: false,
            name: 'Second'
        }, {
            completed: false,
            name: 'Third'
        },

    ];
}