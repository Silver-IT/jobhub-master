import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'job-hub-image-preview-dialog',
  templateUrl: './image-preview-dialog.component.html',
  styleUrls: ['./image-preview-dialog.component.scss']
})
export class ImagePreviewDialogComponent implements OnInit {

  image: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {image: string}
  ) { }

  ngOnInit(): void {
    this.image = this.data.image;
  }

}
