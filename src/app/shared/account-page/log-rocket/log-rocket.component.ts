import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LogRocketService } from '../../../core/services/log-rocket.service';
import { SocketService } from '../../../core/services/socket.service';
import { LogRocketRecording } from '../../../core/models/log-rocket-recording';

@Component({
  selector: 'job-hub-log-rocket',
  templateUrl: './log-rocket.component.html',
  styleUrls: ['./log-rocket.component.scss']
})
export class LogRocketComponent implements OnInit, OnDestroy {

  authorizedOptions = [
    {label: 'All', value: null},
    {label: 'Authorized', value: true},
    {label: 'Anonymous', value: false},
  ];
  resolvedOptions = [
    {label: 'All', value: null},
    {label: 'Resolved', value: true},
    {label: 'Unresolved', value: false},
  ];

  form: FormGroup = this.fb.group({
    authorized: null,
    resolved: null,
  });

  recordings: LogRocketRecording[] = [];

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private logRocketService: LogRocketService,
    private socketService: SocketService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form.valueChanges.pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(value => {
    });

    this.socketService.subscribeLogRocketRecordings().pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe((recording: LogRocketRecording) => {
      if (recording.isUpdate) {
        const index = this.recordings.findIndex(x => x.id === recording.id);
        if (index >= 0) {
          this.recordings[index] = recording;
        } else {
          // ignore unlisted recording update
        }
      } else {
        this.recordings.push(recording);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }
}
