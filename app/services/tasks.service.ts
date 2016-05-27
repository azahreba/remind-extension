import {Injectable} from '@angular/core';

interface Task {
    title: string;
    completed: boolean;
}

@Injectable()
export class Task {
    tasks: Task[] = [

    ];

    getTasks: () => Promise =
        () => Promise.resolve(this.tasks);
}