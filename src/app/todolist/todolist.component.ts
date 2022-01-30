import { Component, OnInit } from '@angular/core';
import { Task } from "../Models/task";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  tasks: Task[] = [];

  showTodoList: boolean = this.tasks.filter(i => !(i.completedStatus)).length > 0;
  showCompletedList: boolean = this.tasks.filter(i => i.completedStatus).length > 0;

  constructor() { }

  handleNewTask(event: any) {
    if (event.target.closest('form').checkValidity()) {
      event.preventDefault();

      this.tasks.push({
        id: this.uid(),
        name: event.target.addtask.value,
        editStatus: false,
        completedStatus: false,
        created_at: new Date()
      });

      this.updateList();
      event.target.reset();
    }
  }

  handleEdit({ taskId, taskName }: any) {
    let task = this.tasks[this.tasks.findIndex((i => i.id == taskId))];
    if (task.editStatus) {
      task.editStatus = false;
      task.name = taskName;
    }
    else {
      task.editStatus = true;
    }
  }

  handleDelete(taskId: any) {
    this.tasks.splice(this.tasks.findIndex((i => i.id == taskId)), 1);
    this.updateList();
  }

  handleCheckbox({taskId, checked}: any) {
    let task = this.tasks[this.tasks.findIndex((i => i.id == taskId))];
    task.completedStatus = (checked) ? true : false;
    this.updateList();
  }

  updateList() {
    this.showTodoList = this.tasks.filter(i => !(i.completedStatus)).length > 0;
    this.showCompletedList = this.tasks.filter(i => i.completedStatus).length > 0;
  }

  uid(): number {
    return Date.now();
  }

  ngOnInit(): void {
  }

}
