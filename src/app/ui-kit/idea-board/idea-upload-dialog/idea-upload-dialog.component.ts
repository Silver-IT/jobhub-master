import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { ToastrService } from '../../../core/services/toastr.service';

@Component({
  selector: 'job-hub-idea-upload-dialog',
  templateUrl: './idea-upload-dialog.component.html',
  styleUrls: ['./idea-upload-dialog.component.scss']
})
export class IdeaUploadDialogComponent implements OnInit {

  files: string[] = [];

  constructor(
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<IdeaUploadDialogComponent>,
  ) { }

  ngOnInit(): void {
  }

  assign() {
    if (this.files && this.files.length) {
      this.dialogRef.close(this.files);
    } else {
      this.toastr.info('Please upload images first.');
    }
  }

}
