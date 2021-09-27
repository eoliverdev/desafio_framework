import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material';

import { Post } from './../posts.model';
import { PostsService } from './../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  pagedList: Post[];
  subscription: Subscription;
  // Muda Grid
  breakpoint: string = 'grid-4';
  // MatPaginator Inputs
  length: number = 0;
  pageSize: number = 20;
  pageSizeOptions: number[] = [10, 20, 50];
  pageIndex: number = 0;

  constructor(
    private postsService: PostsService
  ) { }

  private grid(size: number) {
    return (size <= 960) ? 'grid-1' : (size <= 1900) ? 'grid-4' : 'grid-5';
  }

  ngOnInit(): void {
    this.breakpoint = this.grid(window.innerWidth);

    this.subscription = this.postsService.read().subscribe(posts => {
      this.posts = posts;
      this.pagedList = this.posts.slice(0, 20);
      this.length = this.posts.length;
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
    this.pagedList = this.posts.slice(startIndex, endIndex);
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  onResize(event: any) { // Ajusta Grid ao Tamanho de Tela
    this.breakpoint = this.grid(event.target.innerWidth);
  }

  trackByFn(index: number, item: any) {
    return item.id; // id único correspondente ao item
  }
  changeGrid() {
    this.breakpoint = (this.breakpoint == 'grid-1') ? this.grid(window.innerWidth) : 'grid-1';
  }
}
