import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChooseUsComponent } from './why-choose-us.component';

describe('WhyChooseUsComponent', () => {
  let component: WhyChooseUsComponent;
  let fixture: ComponentFixture<WhyChooseUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyChooseUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyChooseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
