import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkContractorDetailsDialogComponent } from './network-contractor-details-dialog.component';

describe('NetworkContractorDetailsDialogComponent', () => {
  let component: NetworkContractorDetailsDialogComponent;
  let fixture: ComponentFixture<NetworkContractorDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkContractorDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkContractorDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
