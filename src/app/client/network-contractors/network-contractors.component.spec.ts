import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkContractorsComponent } from './network-contractors.component';

describe('NetworkContractorsComponent', () => {
  let component: NetworkContractorsComponent;
  let fixture: ComponentFixture<NetworkContractorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkContractorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkContractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
