import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { UploadInput, UploadOutput } from 'ngx-uploader';
import { NgProgressComponent } from 'ngx-progressbar';
import { forkJoin, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { UploadService } from '../../../core/services/upload.service';
import { ToastrService } from '../../../core/services/toastr.service';

@Component({
  selector: 'job-hub-drag-uploader',
  templateUrl: './drag-uploader.component.html',
  styleUrls: ['./drag-uploader.component.scss']
})
export class DragUploaderComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() height = 205;
  @Output() uploaded: EventEmitter<string[]> = new EventEmitter<string[]>();
  @ViewChild(NgProgressComponent) progress: NgProgressComponent;

  uploadInput: EventEmitter<UploadInput>;
  options = { concurrency: 1, maxUploads: 50, allowedContentTypes: ['image/jpeg', 'image/png'] };

  isUploading = false;
  files: any[] = [];
  pendingFiles: File[] = [];

  private pendingFilled$: Subject<any> = new Subject<any>();
  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private uploadService: UploadService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.pendingFilled$.asObservable().pipe(
      debounceTime(500)
    ).subscribe(() => {
      this.startUploading();
    });
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  onUploadOutput(output: UploadOutput): void {
    if (output.type === 'addedToQueue') {
      if (this.isUploading) {
        return;
      }
      const file: any = output.file;
      this.pendingFiles.push(file.nativeFile);
      this.pendingFilled$.next(true);
    }
  }

  deleteItem(index: number) {
    this.files.splice(index, 1);
    this.uploaded.emit(this.files);
  }

  private async startUploading() {
    try {
      this.isUploading = true;
      this.progress.start();
      const res = await forkJoin(this.pendingFiles.map(file => this.uploadService.upload(file))).toPromise();
      this.pendingFiles = [];
      this.files = [...this.files, ...res];
      this.uploaded.emit(this.files);
    } catch (e) {
      this.toastr.error(e, 'Sorry, there seems to be a problem while uploading files. Please try again.');
    } finally {
      this.isUploading = false;
      this.progress.complete();
    }
  }

}
