import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { Modal } from './../posts.model';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent {

  constructor(
    public dialogRef: MatDialogRef<PostModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Modal
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
