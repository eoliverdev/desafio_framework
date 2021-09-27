import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule, MatDialogModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { PostsService } from './posts.service';
import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostModalComponent } from './post-modal/post-modal.component';

@NgModule({
  declarations: [
    PostListComponent,
    PostItemComponent,
    PostModalComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostsRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule
  ],
  exports: [],
  entryComponents: [
    PostModalComponent
  ],
  providers: [PostsService]
})
export class PostsModule { }
