import { Subscription } from 'rxjs';
import { finalize } from "rxjs/operators";
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Message, Post } from './../posts.model';
import { PostsService } from './../posts.service';
import { PostModalComponent } from '../post-modal/post-modal.component';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {

  @Input() post: Post[];
  subscription: Subscription;
  dlogSubscription: Subscription;
  messages: Message[];

  constructor(
    private postsService: PostsService,
    public dialog: MatDialog
  ) { }

  openDialog(id: any) { // Abre Modal com Comentarios
    this.subscription = this.postsService.readMessages(id).subscribe(messages => {
      this.messages = messages;
      const dialogRef = this.dialog.open(PostModalComponent, {
        width: '600px',
        height: '600px',
        data: { msgs: this.messages }
      });
      dialogRef.afterClosed().pipe(finalize(() => "")).subscribe(() => {
        this.subscription.unsubscribe();
      });
    });
  }
}
