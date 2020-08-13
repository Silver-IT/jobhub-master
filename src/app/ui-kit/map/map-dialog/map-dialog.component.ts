import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'job-hub-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.scss']
})
export class MapDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {address: string, latitude: number, longitude: number}
  ) { }

  ngOnInit(): void {
  }

}
