import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AgreementDialogAction } from '../agreement-dialog';

@Component({
  selector: 'job-hub-agreement-dialog',
  templateUrl: './agreement-dialog.component.html',
  styleUrls: ['./agreement-dialog.component.scss']
})
export class AgreementDialogComponent implements OnInit {

  AgreementDialogAction = AgreementDialogAction;

  constructor(
    private dialogRef: MatDialogRef<AgreementDialogComponent>,
  ) {
  }

  agree = false;

  ngOnInit(): void {
  }

  confirm() {
    this.dialogRef.close(AgreementDialogAction.Agreed);
  }
}
