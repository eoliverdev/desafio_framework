import { Subscription } from 'rxjs';
import { finalize } from "rxjs/operators";
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Album, Photo } from './../albums.model';
import { AlbumsService } from './../albums.service';
import { AlbumModalComponent } from '../album-modal/album-modal.component';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent {

  @Input() album: Album;
  subscription: Subscription;
  photos: Photo[];

  constructor(
    private albumsService: AlbumsService,
    public dialog: MatDialog
  ) { }

  private grid(size: number) {
    return (size <= 600) ? 3 : (size <= 1900) ? 4 : 5;
  }
  openDialog(id: any, nameAlbum: string) { // Abre Modal com Fotos
    this.subscription = this.albumsService.readPhotos(id).subscribe(photos => {
      this.photos = photos;
      const dialogRef = this.dialog.open(AlbumModalComponent, {
        width: '600px',
        height: '600px',
        panelClass: 'panelBox',
        autoFocus: true,
        data: { photos: this.photos, title: nameAlbum, columns: this.grid(window.innerWidth) }
      });
      dialogRef.afterClosed().pipe(finalize(() => "")).subscribe(() => {
        this.subscription.unsubscribe();
      });
    });
  }
}
