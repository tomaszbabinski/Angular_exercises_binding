import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TasksService {

  private tasksList: Array<string> = [];
  private tasksDone: Array<string> = [];

  private tasksListObs = new BehaviorSubject<Array<string>>(this.tasksList);
  private tasksListDoneObs = new BehaviorSubject<Array<string>>(this.tasksDone);

  constructor() {
    this.tasksList = ['Learning Angular', 'swimming', 'cleaning', 'yoga practising', 'shopping'];
    this.tasksListObs.next(this.tasksList);
  }


  add(task: string) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
    this.tasksListObs.next(this.tasksList);

  }

  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
    this.tasksListDoneObs.next(this.tasksDone);

  }

  getTasksListObs(): Observable<Array<string>> {
    return this.tasksListObs.asObservable();
  }

  getTasksListDoneObs(): Observable<Array<string>> {
    return this.tasksListDoneObs.asObservable();
  }




}
