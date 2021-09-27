import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "postagens", loadChildren: () => import('./posts/posts.module').then(mod => mod.PostsModule) },
  { path: "albuns", loadChildren: () => import('./albums/albums.module').then(mod => mod.AlbumsModule) },
  { path: "todos", loadChildren: () => import('./todos/todos.module').then(mod => mod.TodosModule) },
  { path: "", redirectTo: '/postagens', pathMatch: 'full' },
  { path: "**", redirectTo: '/postagens', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
