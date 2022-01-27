import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  tasks: {
    id: number, 
    name: string, 
    editStatus: boolean,
    completedStatus: boolean,
    created_at: Date, 
    update_at?: Date
  }[] = [];

  showTodoList:boolean = this.tasks.filter(i => !(i.completedStatus)).length > 0;
  showCompletedList:boolean = this.tasks.filter(i => i.completedStatus).length > 0;

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

  handleEdit(event:any) {
    if (event.target.closest('form').checkValidity()) {
      event.preventDefault();
      
      let task = this.tasks[this.tasks.findIndex((i => i.id == event.target.closest('button').getAttribute("taskId")))];
      if (task.editStatus) {
        task.editStatus = false;
        task.name = event.target.closest('form').updatetask.value;
      }
      else {
        task.editStatus = true;
      }
    }
  }

  handleDelete(event:any) {
    this.tasks.splice(this.tasks.findIndex((i => i.id == event.target.closest('button').getAttribute("taskId"))), 1);
    this.updateList();
  }
  

  handleCheckbox(event:any) {
    let task = this.tasks[this.tasks.findIndex((i => i.id == event.target.getAttribute("taskId")))];
    task.completedStatus = (event.target.checked) ? true : false;
    this.updateList();
  }

  updateList() {
    this.showTodoList = this.tasks.filter(i => !(i.completedStatus)).length > 0;
    this.showCompletedList = this.tasks.filter(i => i.completedStatus).length > 0;
  }

  uid():number {
    return Date.now();
  }

  ngOnInit(): void {
  }

}
