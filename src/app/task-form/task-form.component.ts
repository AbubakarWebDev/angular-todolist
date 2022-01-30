import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../Models/task";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})

export class TaskFormComponent implements OnInit {

  @Input() todoTask!: Task;
  @Output() completeTask: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateTask: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteTask: EventEmitter<any> = new EventEmitter<any>();

  handleCheckbox(event:any) {
    this.completeTask.emit({
      taskId: event.target.getAttribute("taskId"), 
      checked: event.target.checked
    });
  }

  handleDelete(event:any) {
    event.preventDefault();
    this.deleteTask.emit(event.target.closest('button').getAttribute("taskId"));
  }

  handleEdit(event:any) {
    if (event.target.closest('form').checkValidity()) {
      event.preventDefault();
      this.updateTask.emit({
        taskId: event.target.closest('button').getAttribute("taskId"), 
        taskName: event.target.closest('form').updatetask.value
      });
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
