import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingProjectComponent } from './pending-project.component';

describe('PendingProjectComponent', () => {
  let component: PendingProjectComponent;
  let fixture: ComponentFixture<PendingProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
