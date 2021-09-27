import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatDialogModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { AlbumsService } from './albums.service';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumItemComponent } from './album-item/album-item.component';
import { AlbumModalComponent } from './album-modal/album-modal.component';

@NgModule({
  declarations: [
    AlbumListComponent,
    AlbumItemComponent,
    AlbumModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AlbumsRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [],
  providers: [AlbumsService]
})
export class AlbumsModule { }
