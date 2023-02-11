import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../Models/task";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})

export class TaskFormComponent implements OnInit {

  @Input() todoTask!: {index: Number, task: Task};
  @Output() completeTask: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateTask: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteTask: EventEmitter<any> = new EventEmitter<any>();

  handleCheckbox(i: Number, checked: boolean): void {
    this.completeTask.emit({
      index: i,
      checked: checked
    });
  }

  handleDelete(event: any, index: Number) : void {
    event.preventDefault();
    this.deleteTask.emit(index);
  }

  handleEdit(event:any, i: Number, taskName: String) : void {
    if (event.target.closest('form').checkValidity()) {
      event.preventDefault();
      this.updateTask.emit({
        index: i,
        taskName: taskName
      });
    }
  }

  constructor() { }

  ngOnInit(): void {

  }

}
