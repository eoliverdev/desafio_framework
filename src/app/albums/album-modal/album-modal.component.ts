import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Modal } from './../albums.model';

@Component({
  selector: 'app-album-modal',
  templateUrl: './album-modal.component.html',
  styleUrls: ['./album-modal.component.css']
})
export class AlbumModalComponent {

  onlyPhoto: string = "";

  constructor(
    public dialogRef: MatDialogRef<AlbumModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Modal
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  openPhoto(url: string) {
    this.onlyPhoto = url;
  }
  closePhoto() {
    this.onlyPhoto = "";
  }
}
