import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaSetCategoryDialogComponent } from './idea-set-category-dialog.component';

describe('IdeaSetCategoryDialogComponent', () => {
  let component: IdeaSetCategoryDialogComponent;
  let fixture: ComponentFixture<IdeaSetCategoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaSetCategoryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaSetCategoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
