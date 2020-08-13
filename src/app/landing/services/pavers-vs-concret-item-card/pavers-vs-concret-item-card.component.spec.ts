import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaversVsConcretItemCardComponent } from './pavers-vs-concret-item-card.component';

describe('PaversVsConcretItemCardComponent', () => {
  let component: PaversVsConcretItemCardComponent;
  let fixture: ComponentFixture<PaversVsConcretItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaversVsConcretItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaversVsConcretItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
