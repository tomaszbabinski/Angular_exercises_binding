import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable()
export class TasksService {



  private tasksListObs = new BehaviorSubject<Array<Task>>([]);


  constructor() {
    const tasksList = [{ name: 'Learning Angular', created: new Date().toLocaleString(), isDone: false },
    { name: 'swimming', created: new Date().toLocaleString(), isDone: false },
    { name: 'cleaning', created: new Date().toLocaleString(), isDone: false  },
    { name: 'yoga practising', created: new Date().toLocaleString(), isDone: false  },
    { name: 'shopping', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true  }];
    this.tasksListObs.next(tasksList);
  }


  add(task: Task) {
    const list = this.tasksListObs.getValue();
    list.push(task);
    this.tasksListObs.next(list);
  }

  remove(task: Task) {
    const list = this.tasksListObs.getValue().filter(e => e !== task);
    this.tasksListObs.next(list);

  }

  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
    // this.tasksDone.push(task);
    // this.remove(task);
    // this.tasksListDoneObs.next(this.tasksDone);

  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }





}
