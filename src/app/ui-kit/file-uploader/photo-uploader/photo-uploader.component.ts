import { Component, EventEmitter, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UploadInput, UploadOutput } from 'ngx-uploader';

import { UploadService } from '../../../core/services/upload.service';
import { ImagePreviewDialogService } from '../../../shared/image-preview-dialog/image-preview-dialog.service';

@Component({
  selector: 'job-hub-photo-uploader',
  templateUrl: './photo-uploader.component.html',
  styleUrls: ['./photo-uploader.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhotoUploaderComponent),
      multi: true,
    }
  ]
})
export class PhotoUploaderComponent implements ControlValueAccessor {

  @Input() readonly;
  @Input() align = 'center';
  @Input() size = 86;

  value;
  onChange;

  files = [];
  uploadInput: EventEmitter<UploadInput>;
  options = {concurrency: 1, allowedContentTypes: ['image/jpeg', 'image/png']};

  constructor(
    private uploadService: UploadService,
    private imagePreviewDialogService: ImagePreviewDialogService
  ) {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: string[]): void {
    this.files = obj.map(x => typeof x === 'string' ? {url: x} : x);
    this.change(this.files);
  }

  change(value) {
    // only when change method registered
    if (this.onChange) {
      this.onChange(value.map(x => x.url));
    }
  }

  viewImage(image: string) {
    this.imagePreviewDialogService.openImagePreviewDialog(image);
  }

  async onUploadOutput(output: UploadOutput) {
    if (output.type === 'addedToQueue') {
      const file: any = output.file;
      const data = {url: '', loading: true, failed: false};
      try {
        this.files.push(data);
        data.url = await this.uploadService.upload(file.nativeFile).toPromise();
        data.loading = false;
        this.change(this.files);
      } catch (e) {
        data.failed = true;
      } finally {
        data.loading = false;
      }
    }
  }

  deleteItem(index: number) {
    this.files.splice(index, 1);
    this.change(this.files);
  }

  private readImage(file): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = ((e) => {
        resolve(e.target.result);
      });
      reader.onerror = ((e) => {
        resolve(null);
      });
      reader.readAsDataURL(file);
    });
  }

}
