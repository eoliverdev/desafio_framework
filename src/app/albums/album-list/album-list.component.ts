import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material';

import { Album } from './../albums.model';
import { AlbumsService } from './../albums.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit, OnDestroy {

  albums: Album[];
  pagedList: Album[];
  subscription: Subscription;
  // Muda Grid
  breakpoint: string = 'grid-4';
  // MatPaginator Inputs
  length: number = 0;
  pageSize: number = 20;
  pageSizeOptions: number[] = [10, 20, 50];
  pageIndex: number = 0;

  constructor(
    private albumsService: AlbumsService
  ) { }

  private grid(size: number) {
    return (size <= 960) ? 'grid-2' : (size <= 1900) ? 'grid-4' : 'grid-8';
  }

  ngOnInit(): void {
    this.breakpoint = this.grid(window.innerWidth);
    this.subscription = this.albumsService.read().subscribe(albums => {
      this.albums = albums;
      this.pagedList = this.albums.slice(0, 20);
      this.length = this.albums.length;
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
    this.pagedList = this.albums.slice(startIndex, endIndex);
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  onResize(event: any) { // Ajusta Grid ao Tamanho de Tela
    this.breakpoint = this.grid(event.target.innerWidth);
  }

  trackByFn(index: number, item: any) { // id único correspondente ao item
    return item.id;
  }
}
