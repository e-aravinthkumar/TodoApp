import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  
  @Input() tasks!:string[]

  

  removeTask(index:number){
    this.tasks.splice(index, 1);
    localStorage['taskList'] = JSON.stringify(this.tasks);
  }
}
