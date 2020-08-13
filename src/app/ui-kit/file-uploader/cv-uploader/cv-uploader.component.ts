import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { UploadInput, UploadOutput } from 'ngx-uploader';

@Component({
  selector: 'job-hub-cv-uploader',
  templateUrl: './cv-uploader.component.html',
  styleUrls: ['./cv-uploader.component.scss']
})
export class CvUploaderComponent implements OnInit {

  @Input() height = 125;

  file;
  uploadInput: EventEmitter<UploadInput>;
  options = { concurrency: 1, maxUploads: 3 };

  constructor() { }

  ngOnInit(): void {
  }

  onUploadOutput(output: UploadOutput): void {
    if (output.type === 'addedToQueue') {
      this.file = output.file;
    }
  }

}
