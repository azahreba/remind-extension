import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {Observable} from "rxjs/Rx";

import {MdButton} from '@angular2-material/button';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdSpinner} from '@angular2-material/progress-circle';
import {MdList, MdListItem} from '@angular2-material/list';

import {ITask, TaskService} from "../services/task.service";

@Component({
    selector: 'rm-dashboard',
    templateUrl: 'app/components/dashboard.component.html',
    directives: [
        MdButton,
        MdCheckbox,
        MdList,
        MdListItem,
        MdSpinner
    ],
    styleUrls: [''],
    providers: [TaskService]
})

export class DashboardComponent implements OnInit {
    tasks: ITask[];
    errorMessage: string;
    showSpinner: boolean;

    constructor(private _taskService: TaskService) {}
    ngOnInit() {

        this._taskService.getTasks()
            .subscribe(
                tasks => this.tasks = tasks,
                error => this.errorMessage = error
            );
    }
}