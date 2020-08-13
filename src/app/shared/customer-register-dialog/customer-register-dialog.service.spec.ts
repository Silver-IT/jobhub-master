import { TestBed } from '@angular/core/testing';

import { CustomerRegisterDialogService } from './customer-register-dialog.service';

describe('CustomerRegisterDialogService', () => {
  let service: CustomerRegisterDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerRegisterDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
