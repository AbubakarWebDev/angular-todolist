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

  handleEdit({index, taskName}: any) {
    if (this.tasks[index].editStatus) {
      this.tasks[index].editStatus = false;
      this.tasks[index].name = taskName;
    }
    else {
      this.tasks[index].editStatus = true;
    }
  }

  handleDelete(index: any) {
    this.tasks.splice(index, 1);
    this.updateList();
  }

  handleCheckbox({index, checked}: any) {
    this.tasks[index].completedStatus = (checked) ? true : false;
    this.updateList();
  }

  updateList() {
    this.showTodoList = this.tasks.filter(i => !(i.completedStatus)).length > 0;
    this.showCompletedList = this.tasks.filter(i => i.completedStatus).length > 0;
  }

  trackByUid(index: Number, task: Task) : Number {
    return task.id;
  }

  uid(): number {
    return Date.now();
  }

  ngOnInit(): void {
  }

}
