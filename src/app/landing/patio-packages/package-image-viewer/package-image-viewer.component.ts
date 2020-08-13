import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'job-hub-package-image-viewer',
  templateUrl: './package-image-viewer.component.html',
  styleUrls: ['./package-image-viewer.component.scss']
})
export class PackageImageViewerComponent implements OnInit {

  @Input() images: string[] = [];

  selected: string;

  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.selected = null;
  }

}
