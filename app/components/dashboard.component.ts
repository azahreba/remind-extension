import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {Observable} from "rxjs/Rx";

import {MdButton} from '@angular2-material/button';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdProgressCircle, MdSpinner} from '@angular2-material/progress-circle';

import {ITask, TaskService} from "../services/task.service";

@Component({
    selector: 'rm-dashboard',
    templateUrl: 'app/components/dashboard.component.html',
    directives: [
        MdButton,
        MdCheckbox,
        MdSpinner
    ],
    styleUrls: [''],
    providers: [TaskService]
})

export class DashboardComponent implements OnInit {
    // tasks: Task[];
    // errorMessage: string;
    //
    // constructor(private _taskService: TaskService) {}
    // ngOnInit() {
    //     this._taskService.getTasks()
    //         .subscribe(
    //             tasks => this.tasks = tasks,
    //             error => this.errorMessage = error
    //         );
    // }

    //if you don't need to handle an error - use async
    //async works with Promises
    tasks: Observable<ITask[]>;

    constructor(private _taskService: TaskService) {}

    ngOnInit() {
        this.tasks = this._taskService.getTasks();
    }
}