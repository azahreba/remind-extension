import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "@angular/router-deprecated";

import {MdButton} from '@angular2-material/button';
import {MdCard} from '@angular2-material/card';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdInput} from '@angular2-material/input';
import {MdProgressCircle, MdSpinner} from '@angular2-material/progress-circle';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MdToolbar} from '@angular2-material/toolbar';

import {DashboardComponent} from "./dashboard.component";
import {ProjectsComponent} from "./projects.component";


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
        MdToolbar,

        ROUTER_DIRECTIVES
    ],
    styleUrls: ['app/components/app.component.css'],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, MdIconRegistry]
})
@RouteConfig([
    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
    { path: '/projects/...', name: 'Projects', component: ProjectsComponent }
])

export class AppComponent implements OnInit {
    ngOnInit() {
    }
}