import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable()
export class TasksService {

  private tasksList: Array<Task> = [];
  private tasksDone: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  private tasksListDoneObs = new BehaviorSubject<Array<Task>>([]);

  constructor() {
    this.tasksList = [{ name: 'Learning Angular', created: new Date() },
    { name: 'swimming', created: new Date() },
    { name: 'cleaning', created: new Date() },
    { name: 'yoga practising', created: new Date() },
    { name: 'shopping', created: new Date() }];
    this.tasksListObs.next(this.tasksList);
  }


  add(task: Task) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  remove(task: Task) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.tasksListObs.next(this.tasksList);

  }

  done(task: Task) {
    this.tasksDone.push(task);
    this.remove(task);
    this.tasksListDoneObs.next(this.tasksDone);

  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  getTasksListDoneObs(): Observable<Array<Task>> {
    return this.tasksListDoneObs.asObservable();
  }




}
