import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkContractorItemComponent } from './network-contractor-item.component';

describe('NetworkContractorItemComponent', () => {
  let component: NetworkContractorItemComponent;
  let fixture: ComponentFixture<NetworkContractorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkContractorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkContractorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
