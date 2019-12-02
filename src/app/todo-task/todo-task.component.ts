import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../services/tasks.service';


@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {


  tasksList = [];



  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe(tasks => {
      this.tasksList = tasks;
    });
  }

  ngOnInit() {
  }

  remove(task: string) {
    this.tasksService.remove(task);
  }

  done(task: string) {
    this.tasksService.done(task);
  }

  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
