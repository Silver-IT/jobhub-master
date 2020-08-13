import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaversVsConcretComponent } from './pavers-vs-concret.component';

describe('PaversVsConcretComponent', () => {
  let component: PaversVsConcretComponent;
  let fixture: ComponentFixture<PaversVsConcretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaversVsConcretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaversVsConcretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
