import { TestBed } from '@angular/core/testing';

import { ImagePreviewDialogService } from './image-preview-dialog.service';

describe('ImagePreviewDialogService', () => {
  let service: ImagePreviewDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagePreviewDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
