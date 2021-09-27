import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsModule } from './posts/posts.module';
import { AlbumsModule } from './albums/albums.module';
import { TodosModule } from './todos/todos.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    PostsModule,
    AlbumsModule,
    TodosModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
