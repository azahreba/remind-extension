import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

export interface Task {
    title: string;
    completed: boolean;
}

@Injectable()
export class TaskService {
    constructor(private _http: Http) {}

    getTasks() {
        return this._http.get('app/mocks/tasks.json')
            .map((response: Response) => <Task[]>response.json().data)
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }
}