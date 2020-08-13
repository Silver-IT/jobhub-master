import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalPreviewComponent } from './proposal-preview.component';

describe('ProposalPreviewComponent', () => {
  let component: ProposalPreviewComponent;
  let fixture: ComponentFixture<ProposalPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
