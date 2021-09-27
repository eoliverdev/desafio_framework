import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PageEvent } from '@angular/material';

import { Todo } from './../todos.model';
import { TodosService } from './../todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  todos: Todo[];
  pagedList: Todo[];
  subscription: Subscription;
  pageEvent: PageEvent;
  //Show Hide To-Dos
  checkSelect: string = "allItens";
  // MatPaginator Inputs
  length: number = 0;
  pageSize: number = 20;  //displaying ten cards each row
  pageSizeOptions: number[] = [10, 20, 50];
  pageIndex: number = 0;

  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit(): void {
    this.subscription = this.todosService.read().subscribe(todos => {
      this.todos = todos;
      this.pagedList = this.todos.slice(0, 20);
      this.length = this.todos.length;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  OnPageChange(event: PageEvent) {
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.length) {
      endIndex = this.length;
    }
    this.pagedList = this.todos.slice(startIndex, endIndex);
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    return event;
  }
  showCheck() {
    this.checkSelect = "checkedItens";
  }
  showUncheck() {
    this.checkSelect = "uncheckedItens";
  }
  showAll() {
    this.checkSelect = "allItens";
  }
  trackByFn(index: number, item: any) {
    return item.id; // unique id corresponding to the item
  }

}
