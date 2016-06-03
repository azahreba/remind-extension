import {Component, OnInit} from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from "@angular/router-deprecated";
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

import {DashboardComponent} from "./dashboard.component";
import {ProjectsComponent} from "./projects.component";

@Component({
    selector: 'rm-app',
    templateUrl: 'app/components/app.component.html',
    directives: [
        MdButton,
        MdIcon,
        MD_LIST_DIRECTIVES,
        MD_SIDENAV_DIRECTIVES,
        MdToolbar,

        ROUTER_DIRECTIVES
    ],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, MdIconRegistry],
    styleUrls: ['app/components/app.component.css']
})

@RouteConfig([
    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
    { path: '/projects', name: 'Projects', component: ProjectsComponent }
])

export class AppComponent implements OnInit {
    ngOnInit() {
    }
}