import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UploadInput, UploadOutput } from 'ngx-uploader';
import { UploadService } from '../../../core/services/upload.service';

@Component({
  selector: 'job-hub-avatar-uploader',
  templateUrl: './avatar-uploader.component.html',
  styleUrls: ['./avatar-uploader.component.scss']
})
export class AvatarUploaderComponent implements OnInit {

  @Input() size = 40;
  @Input() default = 'assets/images/icons/request-type/driveway.svg';
  @Input() src = this.default;
  @Input() rounded;
  @Output() srcChange = new EventEmitter<string>();

  loading = false;
  failed = false;
  uploadInput: EventEmitter<UploadInput>;
  options = {concurrency: 1, allowedContentTypes: ['image/jpeg', 'image/png']};

  constructor(
    private uploadService: UploadService
  ) {
  }

  ngOnInit(): void {

  }

  async onUploadOutput(output: UploadOutput) {
    if (output.type === 'addedToQueue') {
      const file: any = output.file;
      this.loading = true;
      try {
        this.src = await this.uploadService.upload(file.nativeFile).toPromise();
        this.srcChange.emit(this.src);
      } catch (e) {
        this.failed = true;
      } finally {
        this.loading = false;
      }
    }
  }
}
