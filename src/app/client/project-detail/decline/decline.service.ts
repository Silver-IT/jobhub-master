import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DeclineSource } from '../../../core/models/decline';
import { Estimate } from '../../../core/models/estimate';
import { FinalProposal } from '../../../core/models/final-proposal';
import { DeclineDialogComponent } from './decline-dialog/decline-dialog.component';

@Injectable()
export class DeclineService {

  constructor(
    private dialog: MatDialog
  ) { }

  showDeclineDialog(declineSource: DeclineSource, payload: Estimate | FinalProposal) {
    return this.dialog.open(DeclineDialogComponent, {
      width: '570px',
      closeOnNavigation: true,
      data: {declineSource, payload}
    });
  }
}
